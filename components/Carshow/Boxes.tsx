import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useCallback, useRef, useState } from 'react'
import { Vector3 } from 'three'

// -15 ~ +15
const initPosition = () => {
  // Math.random( * 2 - 1 =>  -1 ~ 1
  const v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, (Math.random() * 2 - 1) * 15)
  // move away from car
  if (v.x < 0) v.x -= 1.75
  if (v.x > 0) v.x += 1.75

  return v
}

const Box = ({ color }) => {
  const box = useRef<THREE.Mesh>(null)
  const time = useRef<number>(0)
  const [xRotSpeed] = useState(() => Math.random())
  const [yRotSpeed] = useState(() => Math.random())
  const [scale] = useState(() => Math.pow(Math.random(), 2) * 0.5 + 0.05)
  const [position, setPosition] = useState<THREE.Vector3>(() => initPosition())

  const { boxMovingSpeed } = useControls({ boxMovingSpeed: 5 })

  const resetPosition = useCallback(() => {
    const v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, Math.random() * 10 + 10)
    if (v.x < 0) v.x -= 1.75
    if (v.x > 0) v.x += 1.75

    setPosition(v)
  }, [])

  useFrame((_state, delta) => {
    time.current += delta * boxMovingSpeed
    const zPositionNow = position.z - time.current
    if (zPositionNow < -10) {
      resetPosition()
      time.current = 0
    }
    box.current.position.set(position.x, position.y, zPositionNow)
    box.current.rotation.x += delta * xRotSpeed
    box.current.rotation.y += delta * yRotSpeed
  })
  return (
    <mesh ref={box} scale={scale} castShadow position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  )
}

const Boxes = () => {
  const [arr] = useState(() => Array(100).fill(0))
  return (
    <>
      {arr.map((_element, index) => (
        <Box key={index} color={index % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]} />
      ))}
    </>
  )
}
export default Boxes
