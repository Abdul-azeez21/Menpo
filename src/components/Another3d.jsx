import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");

  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.z += 0.005;
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={0.015}
      rotation={[4.5, 0, 0]}
      position={[0, 0, 0]}
      ref={mesh}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.material_0}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.material_0}
      />
    </group>
  );
}

const Another3d = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="">
      <div className=" w-screen h-screen">
        {/* <div className="text-white">Another3d</div> */}
        <div className="fixed top-0 left-0 z-0 flex items-center justify-center w-full h-full">
          <Canvas camera={{ position: [0, 0, 4.5] }}>
            <Suspense fallback={null}>
              <ambientLight />
              <pointLight intensity={0.9} position={[10, 10, 10]} />
              <Model />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
        <div className="flex flex-col p-3 text-white relative z-10 w-full h-screen place-content-between">
          <div>
            {" "}
            {/* Audio Control Button */}
            <button
              onClick={toggleSound}
              className="p-2 bg-black/30 rounded-full md:text-sm text-xs text-white"
            >
              {isPlaying ? "Mute Sound" : "Play Sound"}
            </button>
            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/sound.mp3" className="hidden" />
          </div>
          <div className="flex flex-col space-y-4 items-start md:w-1/2 w-full">
            <div className="flex items-start w-full">
              <motion.div
                initial={{ opacity: 0, translateY: 5 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex flex-col items-start justify-start lg:gap-4 md:gap-1 gap-4"
              >
                <h1 className="lg:text-7xl md:text-4xl text-black text-3xl font-semibold">
                  Menpō (面頬)
                </h1>
                <p className="lg:text-lg md:text-sm text-black text-xs">
                  is a type of facial armour that were worn by the Samurai class
                  and their retainers in feudal Japan. There were worn to
                  protect the warrior's face and intimidate their enemies.
                </p>
              </motion.div>
            </div>
            <div className="flex items-end justify-start w-full h-full">
              <motion.div
                className="text-start text-black"
                initial={{ opacity: 0, translateY: 5 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <h1 className="lg:text-lg md:text-sm text-xs">
                  Exploring 3D in react (R3F)
                </h1>
                <p className="lg:text-lg md:text-sm text-xs">
                  Built by{" "}
                  <a href="https://azeezojo.netlify.app/" className="underline">
                    Me (Abdul-azeez)
                  </a>
                </p>
                <p className="lg:text-lg md:text-sm text-xs">
                  3D credit -{" "}
                  <a
                    href="https://sketchfab.com/3d-models/samurai-mask-model-2-70a43b389819494f9fa23065ede03afc"
                    className="underline"
                  >
                    fliolink
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Another3d;
