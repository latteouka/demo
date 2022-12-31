import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <div className='fixed w-screen h-screen'>
      <Canvas {...props}>
        {children}
        <Preload all />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
