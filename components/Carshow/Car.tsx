import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

const Car = (props: JSX.IntrinsicElements['group']) => {
  console.log('car')
  const { nodes, materials } = useGLTF('/models/car/scene-transformed.glb') as unknown as GLTFResult
  const flTire = useRef<THREE.Group>(null)
  const frTire = useRef<THREE.Group>(null)
  const rlTire = useRef<THREE.Group>(null)
  const rrTire = useRef<THREE.Group>(null)

  const { tireSpeed } = useControls({ tireSpeed: 2 })

  useFrame((state) => {
    const elapesd = state.clock.getElapsedTime()
    flTire.current.rotation.x = elapesd * tireSpeed
    frTire.current.rotation.x = elapesd * tireSpeed
    rlTire.current.rotation.x = elapesd * tireSpeed
    rlTire.current.rotation.x = elapesd * tireSpeed
  })
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={[0.005, 0.005, 0.005]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[160.14, 76.37, 268.66]}
            rotation={[2.2, Math.PI / 2, 0]}
            scale={[100, 100, 101.81]}
            ref={flTire}>
            <group rotation={[0, 0, 2.51]} scale={0.4}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Brake_Disc_FL_Brake_Disc_0.geometry}
                material={materials.Brake_Disc}
              />
            </group>
            <group rotation={[Math.PI / 2, 0.94, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tire_FL_TireMaterial_0.geometry}
                material={materials.TireMaterial}
              />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Rim_FL_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
            <mesh castShadow receiveShadow geometry={nodes.Rim_FL_Rim_0.geometry} material={materials.material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rim_FL_CorvetteWingEmblem_0.geometry}
              material={materials.CorvetteWingEmblem}
            />
          </group>
          <group
            position={[-159.93, 76.37, 270.74]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[106.86, 106.86, 108.79]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brake_Caliper_FL_Brake_Caliper_0.geometry}
              material={materials.Brake_Caliper}
            />
          </group>
          <group
            position={[160.14, 76.37, -270.48]}
            rotation={[2.2, Math.PI / 2, 0]}
            scale={[100, 100, 101.81]}
            ref={rlTire}>
            <group rotation={[0, 0, 2.51]} scale={0.4}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Brake_Disc_RL_Brake_Disc_0.geometry}
                material={materials.Brake_Disc}
              />
            </group>
            <group rotation={[Math.PI / 2, 0.94, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tire_RL_TireMaterial_0.geometry}
                material={materials.TireMaterial}
              />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Rim_RL_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
            <mesh castShadow receiveShadow geometry={nodes.Rim_RL_Rim_0.geometry} material={materials.material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rim_RL_CorvetteWingEmblem_0.geometry}
              material={materials.CorvetteWingEmblem}
            />
          </group>
          <group
            position={[-159.93, 76.37, 270.74]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[106.86, 106.86, 108.79]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brake_Caliper_RL_Brake_Caliper_0.geometry}
              material={materials.Brake_Caliper}
            />
          </group>
          <group
            position={[-159.93, 76.37, -270.48]}
            rotation={[-2.2, -Math.PI / 2, 0]}
            scale={[100, 100, 101.81]}
            ref={rrTire}>
            <group rotation={[0, 0, 2.51]} scale={0.4}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Brake_Disc_RR_Brake_Disc_0.geometry}
                material={materials.Brake_Disc}
              />
            </group>
            <group rotation={[Math.PI / 2, 0.94, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tire_RR_TireMaterial_0.geometry}
                material={materials.TireMaterial}
              />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Rim_RR_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
            <mesh castShadow receiveShadow geometry={nodes.Rim_RR_Rim_0.geometry} material={materials.material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rim_RR_CorvetteWingEmblem_0.geometry}
              material={materials.CorvetteWingEmblem}
            />
          </group>
          <group
            position={[-159.93, 76.37, 270.74]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[106.86, 106.86, 108.79]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brake_Caliper_RR_Brake_Caliper_0.geometry}
              material={materials.Brake_Caliper}
            />
          </group>
          <group
            position={[-159.93, 76.37, 268.66]}
            rotation={[-2.2, -Math.PI / 2, 0]}
            scale={[100, 100, 101.81]}
            ref={frTire}>
            <group rotation={[0, 0, 2.51]} scale={0.4}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Brake_Disc_FR_Brake_Disc_0.geometry}
                material={materials.Brake_Disc}
              />
            </group>
            <group rotation={[Math.PI / 2, 0.94, Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tire_FR_TireMaterial_0.geometry}
                material={materials.TireMaterial}
              />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Rim_FR_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
            <mesh castShadow receiveShadow geometry={nodes.Rim_FR_Rim_0.geometry} material={materials.material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rim_FR_CorvetteWingEmblem_0.geometry}
              material={materials.CorvetteWingEmblem}
            />
          </group>
          <group
            position={[-159.93, 76.37, 270.74]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[106.86, 106.86, 108.79]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brake_Caliper_FR_Brake_Caliper_0.geometry}
              material={materials.Brake_Caliper}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Rubber_0.geometry} material={materials.Rubber} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_WindowBorder_0.geometry}
              material={materials.WindowBorder}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Chrome_0.geometry} material={materials.Chrome} />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Shadow_0.geometry} material={materials.Shadow} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Side_Mirrors_0.geometry}
              material={materials.Side_Mirrors}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Mesh_0.geometry} material={materials.Mesh} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_CorvetteWingEmblem_0.geometry}
              material={materials.CorvetteWingEmblem}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Wipers_0.geometry} material={materials.Wipers} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Daylight_Cover_0.geometry}
              material={materials.Daylight_Cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Main_Headlight_Lens_0.geometry}
              material={materials.Main_Headlight_Lens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Reflectors_0.geometry}
              material={materials.Reflectors}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Plastic_0.geometry} material={materials.Plastic} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Side_Reflectors_Cover_0.geometry}
              material={materials.Side_Reflectors_Cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Glossy_Plastic_0.geometry}
              material={materials.Glossy_Plastic}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Windows_0.geometry} material={materials.Windows} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Tail_Lights_Red_Cover_2_0.geometry}
              material={materials.Tail_Lights_Red_Cover_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Headlight_Cover_0.geometry}
              material={materials.Headlight_Cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Tail_Lights_White_Cover_0.geometry}
              material={materials.Tail_Lights_White_Cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Exhaust_Housing_0.geometry}
              material={materials.Exhaust_Housing}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Interior_0.geometry} material={materials.Shadow} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Tail_Lights_Red_Cover_0.geometry}
              material={materials.Tail_Lights_Red_Cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Spoiler_Light_Cover_0.geometry}
              material={materials.Spoiler_Light_Cover}
            />
            <mesh castShadow receiveShadow geometry={nodes.CarBody_2_Exhaust_0.geometry} material={materials.Exhaust} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_2_Blinker_Glass_Cover_0.geometry}
              material={materials.Blinker_Glass_Cover}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_1_Car_Paint_0_2.geometry}
              material={materials.Car_Paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_1_Car_Paint_2_0.geometry}
              material={materials.Car_Paint_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_1_Car_Paint_0_1.geometry}
              material={materials.Car_Paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_1_Car_Paint_0.geometry}
              material={materials.Car_Paint}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CarBody_3_Undercarriage_0.geometry}
              material={materials.Shadow}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.License_Plate_LicensePlate_Frame_0.geometry}
              material={materials.LicensePlate_Frame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.License_Plate_License_Plate_0.geometry}
              material={materials.License_Plate}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Car

type GLTFResult = GLTF & {
  nodes: {
    Brake_Disc_FL_Brake_Disc_0: THREE.Mesh
    Tire_FL_TireMaterial_0: THREE.Mesh
    Rim_FL_Lug_Nuts_0: THREE.Mesh
    Rim_FL_Rim_0: THREE.Mesh
    Rim_FL_CorvetteWingEmblem_0: THREE.Mesh
    Brake_Caliper_FL_Brake_Caliper_0: THREE.Mesh
    Brake_Disc_RL_Brake_Disc_0: THREE.Mesh
    Tire_RL_TireMaterial_0: THREE.Mesh
    Rim_RL_Lug_Nuts_0: THREE.Mesh
    Rim_RL_Rim_0: THREE.Mesh
    Rim_RL_CorvetteWingEmblem_0: THREE.Mesh
    Brake_Caliper_RL_Brake_Caliper_0: THREE.Mesh
    Brake_Disc_RR_Brake_Disc_0: THREE.Mesh
    Tire_RR_TireMaterial_0: THREE.Mesh
    Rim_RR_Lug_Nuts_0: THREE.Mesh
    Rim_RR_Rim_0: THREE.Mesh
    Rim_RR_CorvetteWingEmblem_0: THREE.Mesh
    Brake_Caliper_RR_Brake_Caliper_0: THREE.Mesh
    Brake_Disc_FR_Brake_Disc_0: THREE.Mesh
    Tire_FR_TireMaterial_0: THREE.Mesh
    Rim_FR_Lug_Nuts_0: THREE.Mesh
    Rim_FR_Rim_0: THREE.Mesh
    Rim_FR_CorvetteWingEmblem_0: THREE.Mesh
    Brake_Caliper_FR_Brake_Caliper_0: THREE.Mesh
    CarBody_2_Rubber_0: THREE.Mesh
    CarBody_2_WindowBorder_0: THREE.Mesh
    CarBody_2_Chrome_0: THREE.Mesh
    CarBody_2_Shadow_0: THREE.Mesh
    CarBody_2_Side_Mirrors_0: THREE.Mesh
    CarBody_2_Mesh_0: THREE.Mesh
    CarBody_2_CorvetteWingEmblem_0: THREE.Mesh
    CarBody_2_Wipers_0: THREE.Mesh
    CarBody_2_Daylight_Cover_0: THREE.Mesh
    CarBody_2_Main_Headlight_Lens_0: THREE.Mesh
    CarBody_2_Reflectors_0: THREE.Mesh
    CarBody_2_Plastic_0: THREE.Mesh
    CarBody_2_Side_Reflectors_Cover_0: THREE.Mesh
    CarBody_2_Glossy_Plastic_0: THREE.Mesh
    CarBody_2_Windows_0: THREE.Mesh
    CarBody_2_Tail_Lights_Red_Cover_2_0: THREE.Mesh
    CarBody_2_Headlight_Cover_0: THREE.Mesh
    CarBody_2_Tail_Lights_White_Cover_0: THREE.Mesh
    CarBody_2_Exhaust_Housing_0: THREE.Mesh
    CarBody_2_Interior_0: THREE.Mesh
    CarBody_2_Tail_Lights_Red_Cover_0: THREE.Mesh
    CarBody_2_Spoiler_Light_Cover_0: THREE.Mesh
    CarBody_2_Exhaust_0: THREE.Mesh
    CarBody_2_Blinker_Glass_Cover_0: THREE.Mesh
    CarBody_1_Car_Paint_0_2: THREE.Mesh
    CarBody_1_Car_Paint_2_0: THREE.Mesh
    CarBody_1_Car_Paint_0_1: THREE.Mesh
    CarBody_1_Car_Paint_0: THREE.Mesh
    CarBody_3_Undercarriage_0: THREE.Mesh
    License_Plate_LicensePlate_Frame_0: THREE.Mesh
    License_Plate_License_Plate_0: THREE.Mesh
  }
  materials: {
    Brake_Disc: THREE.MeshStandardMaterial
    TireMaterial: THREE.MeshStandardMaterial
    Lug_Nuts: THREE.MeshStandardMaterial
    material: THREE.MeshPhysicalMaterial
    CorvetteWingEmblem: THREE.MeshStandardMaterial
    Brake_Caliper: THREE.MeshStandardMaterial
    Rubber: THREE.MeshStandardMaterial
    WindowBorder: THREE.MeshStandardMaterial
    Chrome: THREE.MeshStandardMaterial
    Shadow: THREE.MeshStandardMaterial
    Side_Mirrors: THREE.MeshStandardMaterial
    Mesh: THREE.MeshStandardMaterial
    Wipers: THREE.MeshStandardMaterial
    Daylight_Cover: THREE.MeshPhysicalMaterial
    Main_Headlight_Lens: THREE.MeshPhysicalMaterial
    Reflectors: THREE.MeshStandardMaterial
    Plastic: THREE.MeshStandardMaterial
    Side_Reflectors_Cover: THREE.MeshPhysicalMaterial
    Glossy_Plastic: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Tail_Lights_Red_Cover_2: THREE.MeshPhysicalMaterial
    Headlight_Cover: THREE.MeshPhysicalMaterial
    Tail_Lights_White_Cover: THREE.MeshPhysicalMaterial
    Exhaust_Housing: THREE.MeshStandardMaterial
    Tail_Lights_Red_Cover: THREE.MeshPhysicalMaterial
    Spoiler_Light_Cover: THREE.MeshStandardMaterial
    Exhaust: THREE.MeshStandardMaterial
    Blinker_Glass_Cover: THREE.MeshPhysicalMaterial
    Car_Paint: THREE.MeshPhysicalMaterial
    Car_Paint_2: THREE.MeshPhysicalMaterial
    LicensePlate_Frame: THREE.MeshStandardMaterial
    License_Plate: THREE.MeshStandardMaterial
  }
}

useGLTF.preload('/models/car/scene-transformed.glb')
