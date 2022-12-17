const Floor = () => {
  return (
    <mesh
      rotation={[Math.PI / 2 + Math.PI, 0, 0]}
      position={[0, -0.3, 0]}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={0xffffff} />
    </mesh>
  );
};

export default Floor;
