import { useLayoutEffect, useRef, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Phones = () => {
  const phone = useGLTF(
    "https://cdn.rawgit.com/imamaffandi/Gorify/main/public/phonemesh.gltf"
  );
  const boxRef = useRef();
  useLayoutEffect(() => {
    boxRef.current.geometry.computeBoundingBox();
  }, []);
  useFrame((state) => {
    // Get the mouse position relative to the center of the screen
    const mouseX = (state.mouse.x * state.viewport.width) / 10;
    const mouseY = (state.mouse.y * state.viewport.height) / 10;

    // Calculate the rotation angles based on the mouse position
    const rotateX = mouseY / state.viewport.height;
    const rotateY = mouseX / state.viewport.width;

    // Update the object's rotation
    boxRef.current.rotation.x = rotateX;
    boxRef.current.rotation.y = rotateY;
  });

  return (
    <mesh ref={boxRef}>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <ambientLight intensity={1} />
      <pointLight intensity={10} position={[0, 0, 3]} />
      <pointLight intensity={10} position={[0, 0, 1]} />
      <pointLight intensity={10} position={[0, 0, -1]} />
      <primitive object={phone.scene} />
    </mesh>
  );
};

function PhoneCanvas() {
  const groupRef = useRef();
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        camera={{ position: [1, 35, 10], fov: 7 }}
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        className="h-full"
      >
        <Suspense>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <group ref={groupRef} position={[2, 0, 0]}>
            <Phones />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PhoneCanvas;