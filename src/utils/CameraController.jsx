import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef, useEffect } from "react";
import { initCameraController } from "./cameraControllerModule";
import { useXR } from "@react-three/xr";

export default function OrbitControlsController({ allowInXR = false }) {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  const { minDist, maxDist, polarMin, polarMax, azimuthMin, azimuthMax, damping, dampingFactor, targetX, targetY, targetZ } = useControls(
    "OrbitControls",
    {
      minDist: { value: 5, min: 0, max: 50, step: 0.1 },
      maxDist: { value: 25, min: 1, max: 100, step: 0.1 },

      polarMin: { value: 0, min: 0, max: Math.PI, step: 0.01 },
      polarMax: { value: Math.PI / 2, min: 0, max: Math.PI, step: 0.01 },

      azimuthMin: { value: -Math.PI, min: -Math.PI, max: Math.PI, step: 0.01 },
      azimuthMax: { value: Math.PI, min: -Math.PI, max: Math.PI, step: 0.01 },

      damping: true,
      dampingFactor: { value: 0.05, min: 0, max: 0.2, step: 0.01 },

      targetX: { value: 0, min: -10, max: 10, step: 0.01 },
      targetY: { value: 0, min: -10, max: 10, step: 0.01 },
      targetZ: { value: 0, min: -10, max: 10, step: 0.01 },
    }
  );

  // determine XR presentation state and allow Orbit controls in XR only when explicitly allowed
  const { isPresenting } = useXR();
  const activeInXR = !isPresenting || (isPresenting && allowInXR);

  useEffect(() => {
    // initialize the camera controller references so external modules can animate
    // only initialize when controls exist, camera is available, and controls are active (including XR override)
    if (!activeInXR || !controlsRef.current || !camera) return;
    try {
      initCameraController(camera, controlsRef.current);
    } catch (e) {
      console.warn("initCameraController failed:", e);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("app-error", { detail: { message: String(e), stack: e?.stack } }));
      }
    }
  }, [camera]);

  useFrame(() => {
    // don't run updates when controls aren't present, dom element missing, or controls not active
    const controls = controlsRef.current;
    if (!activeInXR || !controls || !gl?.domElement) return;
    try {
      controls.minDistance = minDist;
      controls.maxDistance = maxDist;

      controls.minPolarAngle = polarMin;
      controls.maxPolarAngle = polarMax;

      controls.minAzimuthAngle = azimuthMin;
      controls.maxAzimuthAngle = azimuthMax;

      controls.enableDamping = damping;
      controls.dampingFactor = dampingFactor;

      controls.target.set(targetX, targetY, targetZ);
      controls.update();
    } catch (e) {
      console.warn("OrbitControls update failed:", e);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("app-error", { detail: { message: String(e), stack: e?.stack } }));
      }
    }
  });

  // ensure controls are disposed on unmount to avoid stale references after HMR
  useEffect(() => {
    return () => {
      try {
        if (controlsRef.current?.dispose) controlsRef.current.dispose();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("Failed disposing OrbitControls on cleanup:", e);
      } finally {
        controlsRef.current = null;
      }
    };
  }, []);

  // only mount controls when they should be active and when there's a DOM element
  if (!activeInXR || !gl?.domElement) return null;

  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}
