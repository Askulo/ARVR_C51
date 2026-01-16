import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import CameraController from "./utils/CameraController.jsx";
import Hotspots from "./Hotspots.jsx";
import { Suspense, useState, useEffect } from "react";
import { Loader } from "@react-three/drei";
import { createXRStore, XR } from "@react-three/xr";

import { Leva } from "leva";
import Locomotion from "./Locomotion.jsx";
// import Player from "./Player.jsx";

const store = createXRStore();

const App = () => {
  const [arSupported, setArSupported] = useState(false);
  const [vrSupported, setVrSupported] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [arError, setArError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const ar = await navigator.xr?.isSessionSupported?.("immersive-ar");
        const vr = await navigator.xr?.isSessionSupported?.("immersive-vr");
        setArSupported(!!ar);
        setVrSupported(!!vr);
      } catch {
        setArSupported(false);
        setVrSupported(false);
      }
    })();
    const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia?.("(pointer:coarse)")?.matches;
    setIsMobileDevice(!!mobile);
  }, []);

  const enter = async mode => {
    try {
      const supported = await navigator.xr?.isSessionSupported(mode === "vr" ? "immersive-vr" : "immersive-ar");
      console.log(`${mode} supported:`, supported);
      // try to enter, but handle failures with more detailed feedback
      if (mode === "vr") {
        await store.enterVR();
      } else {
        await store.enterAR();
      }
      console.log(`${mode} session started`);
    } catch (e) {
      const raw = String(e?.message || e);
      console.error(`Failed to enter ${mode}:`, e);
      if (mode === "ar") {
        // try a direct requestSession attempt if isSessionSupported is false (some browsers misreport)
        if (!navigator.xr) {
          setArError("WebXR not available in this browser. Use Chrome (Android) or a compatible browser with WebXR support.");
          return;
        }

        try {
          const sessionInit = {
            optionalFeatures: ["local-floor", "bounded-floor", "hit-test", "dom-overlay"],
          };
          // try direct requestSession (may trigger permission prompt)
          await navigator.xr.requestSession("immersive-ar", sessionInit);
          // if requestSession worked, try store.enterAR to let the app hook into the session
          try {
            await store.enterAR();
            return;
          } catch (_) {
            // if store integration fails, still inform user that session request succeeded
            setArError("AR session started but the app failed to attach it. Try reloading the page or check the console for details.");
            return;
          }
        } catch (reqErr) {
          const msg = String(reqErr?.message || reqErr).toLowerCase();
          if (/permission|user gesture|not allowed|notallowed|domexception/i.test(msg)) {
            setArError("AR permission denied or blocked. Make sure you allow camera/sensor access and retry.");
          } else if (/not supported|not available|notfound/i.test(msg)) {
            setArError(
              "AR appears unsupported on this device/browser. On iOS use Safari AR Quick Look; on Android use Chrome with WebXR support."
            );
          } else {
            setArError(`Failed to start AR: ${String(reqErr?.message || reqErr)}`);
          }
          return;
        }
      } else {
        // VR failure
        alert(`Failed to enter VR: ${raw}. See console for details.`);
      }
    }
  };

  const attemptAr = async () => {
    setArError(null);
    await enter("ar");
  };

  return (
    <>
      <Leva hidden />
      <h1 className='xr-title'>Browser Based AR/VR Visualization</h1>

      {/* <div style={{ position: "absolute", top: 70, left: "50%", transform: "translateX(-50%)", zIndex: 9999, pointerEvents: "auto" }}>
        <button onClick={() => enter("vr")}>Enter VR</button>
        <button onClick={() => enter("ar")}>Enter AR</button>
      </div> */}
      <Canvas camera={{ fov: 75, rotation: [0, 0, 0], position: [0, -8, -15] }}>
        <XR store={store}>
          {/* <Controllers /> */}
          {/* <Hands /> */}
          {/* <Player /> */}

          <color attach='background' args={["#fdfdfeff"]} />
          {!store.isPresenting && <CameraController />}
          {/* <fog attach="fog" args={["#61636fff", 5, 100]} /> */}
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[5, 5, -10]} intensity={1.5} />
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Locomotion />
        </XR>
      </Canvas>
      <Loader />
      <Hotspots />
      {/* mobile-only AR button */}
      {isMobileDevice && (
        <>
          <button
            className='ar-mobile-btn'
            onClick={() => attemptAr()}
            title={arSupported ? "Enter AR" : "Try AR (may not be supported on this device)"}
          >
            {arSupported ? "Enter AR" : "Try AR"}
          </button>
          {arError && (
            <div className='ar-error-toast' role='status' aria-live='polite'>
              <div style={{ marginBottom: 8 }}>{arError}</div>
              <div className='ar-error-actions'>
                {vrSupported && <button onClick={() => enter("vr")}>Try VR Instead</button>}
                <a href='https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API' target='_blank' rel='noreferrer'>
                  WebXR Help
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default App;
