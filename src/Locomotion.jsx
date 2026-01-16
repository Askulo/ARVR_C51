import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useXR } from "@react-three/xr";
import * as THREE from "three";

export default function Locomotion({ speed = 2 }) {
  const { player, controllers = [] } = useXR();
  const { camera, scene } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const keys = useRef({ forward: 0, right: 0 });

  // keyboard fallback for preview / desktop
  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "w") keys.current.forward = 1;
      if (e.key === "s") keys.current.forward = -1;
      if (e.key === "a") keys.current.right = -1;
      if (e.key === "d") keys.current.right = 1;
    };
    const onKeyUp = e => {
      if (e.key === "w" && keys.current.forward === 1) keys.current.forward = 0;
      if (e.key === "s" && keys.current.forward === -1) keys.current.forward = 0;
      if (e.key === "a" && keys.current.right === -1) keys.current.right = 0;
      if (e.key === "d" && keys.current.right === 1) keys.current.right = 0;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  // teleport when a simulated-select or xr-controller selectend/squeeze with a hit is received
  useEffect(() => {
    const teleportToHit = hitPoint => {
      if (!hitPoint) return;
      const targetY = player?.position?.y ?? camera.position.y; // keep current height
      const newPos = new THREE.Vector3(hitPoint.x, targetY, hitPoint.z);
      if (player) player.position.copy(newPos);
      else camera.position.copy(newPos);
    };

    const onSim = e => {
      const hit = e?.detail?.hit;
      if (hit) teleportToHit(hit.point);
    };

    const onXrController = e => {
      const detail = e?.detail || {};
      const type = detail.type;
      const handedness = detail.handedness;
      if (type !== "selectend" && type !== "squeeze") return;
      // find matching controller object and raycast from it
      const ctrl = controllers.find(c => {
        const h = (c.inputSource && c.inputSource.handedness) || c.handedness;
        return h === handedness;
      });
      if (!ctrl) return;
      const origin = new THREE.Vector3();
      const dir = new THREE.Vector3(0, 0, -1);
      ctrl.matrixWorld.decompose(origin, new THREE.Quaternion(), new THREE.Vector3());
      dir.applyQuaternion(ctrl.quaternion);
      raycaster.current.set(origin, dir);
      const hits = raycaster.current.intersectObjects(scene.children, true);
      if (hits.length) teleportToHit(hits[0].point);
    };

    window.addEventListener("simulated-select", onSim);
    window.addEventListener("xr-controller", onXrController);
    return () => {
      window.removeEventListener("simulated-select", onSim);
      window.removeEventListener("xr-controller", onXrController);
    };
  }, [controllers, player, camera, scene]);

  // smooth locomotion from thumbsticks + keyboard fallback
  useFrame((_, delta) => {
    let moveX = keys.current.right;
    let moveZ = keys.current.forward;

    // read axes from controllers (support different controller layouts)
    controllers.forEach(c => {
      const gp = c.inputSource?.gamepad;
      if (!gp || !gp.axes) return;
      // prefer secondary axes if present (common pattern), else fallback to first pair
      const axX = Math.abs(gp.axes[2] || 0) > Math.abs(gp.axes[0] || 0) ? gp.axes[2] : gp.axes[0];
      const axY = Math.abs(gp.axes[3] || 0) > Math.abs(gp.axes[1] || 0) ? gp.axes[3] : gp.axes[1];
      // deadzone
      const dead = 0.15;
      const x = Math.abs(axX) > dead ? axX : 0;
      const y = Math.abs(axY) > dead ? axY : 0;
      moveX += x;
      moveZ += -y; // invert so forward is negative axis in many controllers
    });

    if (Math.abs(moveX) < 1e-4 && Math.abs(moveZ) < 1e-4) return;

    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(new THREE.Vector3(0, 1, 0), forward).normalize();

    const deltaMove = forward.multiplyScalar(moveZ * speed * delta).add(right.multiplyScalar(moveX * speed * delta));

    if (player) player.position.add(deltaMove);
    else camera.position.add(deltaMove);
  });

  return null;
}
