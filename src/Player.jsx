import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useXR } from "@react-three/xr"
import * as THREE from "three"

export default function Player() {
  const playerRef = useRef()
  const { controllers } = useXR()

  useFrame((_, delta) => {
    if (!controllers[0]) return

    // LEFT controller thumbstick
    const left = controllers[0].inputSource?.gamepad
    if (!left) return

    const x = left.axes[2] || 0 // left/right
    const y = left.axes[3] || 0 // forward/back

    const speed = 2

    const direction = new THREE.Vector3(x, 0, y)
    direction.applyQuaternion(playerRef.current.quaternion)
    direction.multiplyScalar(speed * delta)

    playerRef.current.position.add(direction)
  })

  return (
    <group ref={playerRef}>
      {/* XR Camera automatically injected */}
    </group>
  )
}
