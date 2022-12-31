import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Rings = () => {
  console.log('rings')
  const itemsRef = useRef([])

  const { ringsColorScaleDist, scaleConst, ringsSpeed } = useControls({
    ringsColorScaleDist: 14,
    scaleConst: 0.03,
    ringsSpeed: 1,
  })

  useEffect(() => {
    //console.log(itemsRef)
  })

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()

    for (let i = 0; i < itemsRef.current.length; i++) {
      const mesh = itemsRef.current[i]
      //const z = (i - 7) * 3.5
      const z = (i - 7) * 3.5 + ((elapsed * ringsSpeed) % 3.5) * 2

      mesh.position.set(0, 0, -z)

      const dist = Math.abs(z)
      const scale = 1 - dist * scaleConst
      mesh.scale.set(scale, scale, scale)

      const colorScale = dist > 2 ? 1 - (Math.min(dist, ringsColorScaleDist) - 2) / 10 : 0.5

      if (i % 2 === 1) {
        mesh.material.emissive = new THREE.Color(6, 0.15, 0.7).multiplyScalar(colorScale)
      } else {
        mesh.material.emissive = new THREE.Color(0.1, 0.7, 3).multiplyScalar(colorScale)
      }
    }
  })

  return (
    <>
      {Array(14)
        .fill(0)
        .map((_item, index) => (
          <mesh
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            key={index}
            ref={(element) => (itemsRef.current[index] = element)}>
            <torusGeometry args={[3.35, 0.05, 16, 100]} />
            <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
          </mesh>
        ))}
    </>
  )
}
export default Rings
