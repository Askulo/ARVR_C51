import { gsap } from "gsap";

let _camera = null;
let _controls = null;
let _isAnimating = false;

export function initCameraController(camera, controls) {
  _camera = camera;
  _controls = controls;
}

export function isAnimating() {
  return _isAnimating;
}

export function moveCameraTo({ position, target, duration = 1.5, ease = "power2.out" } = {}) {
  if (!_camera || !_controls) return;

  _isAnimating = true;

  const p = { x: _camera.position.x, y: _camera.position.y, z: _camera.position.z };
  const t = { x: _controls.target.x, y: _controls.target.y, z: _controls.target.z };

  const onComplete = () => {
    _controls.update();
    _isAnimating = false;
  };

  gsap.to(p, {
    x: position[0],
    y: position[1],
    z: position[2],
    duration,
    ease,
    onUpdate: () => {
      _camera.position.set(p.x, p.y, p.z);
      _camera.updateProjectionMatrix && _camera.updateProjectionMatrix();
      _controls.update && _controls.update();
    },
  });

  gsap.to(t, {
    x: target[0],
    y: target[1],
    z: target[2],
    duration,
    ease,
    onUpdate: () => {
      _controls.target.set(t.x, t.y, t.z);
      _controls.update && _controls.update();
    },
    onComplete,
  });
}
