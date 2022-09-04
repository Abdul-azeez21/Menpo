import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={"blue"}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.costumeColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={"orange"}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={"white"}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.costumeColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.costumeColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={"orange"}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={"blue"}
      />
    </group>
  );
}

const Home = () => {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");

  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
          <div className="bg-neutral-900 rounded-md  p-5 relative">
            <h1 className="text-indigo-600 text-base font-semibold text-center">
              3d Testing
            </h1>
            <div className="text-center border border-indigo-600 p-2 flex items-center justify-center my-3">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight />
                  <spotLight
                    intensity={0.9}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  />
                  <Model
                    costumeColors={{ mesh: mesh, stripes: stripes, sole: sole }}
                  />
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <div>
                <input
                  type="color"
                  name="mesh"
                  id="mesh"
                  value={mesh}
                  onChange={(e) => setMesh(e.target.value)}
                />
                <br />
                <label
                  className="text-indigo-600 font-medium flex items-center justify-center"
                  for="mesh"
                >
                  Mesh
                </label>
              </div>
              <div>
                <input
                  type="color"
                  name="stripes"
                  id="stripes"
                  value={stripes}
                  onChange={(e) => setStripes(e.target.value)}
                />
                <br />
                <label
                  className="text-indigo-600 font-medium flex items-center justify-center"
                  for="stripes"
                >
                  Stripes
                </label>
              </div>
              <div>
                <input
                  type="color"
                  name="sole"
                  id="sole"
                  value={sole}
                  onChange={(e) => setSole(e.target.value)}
                />
                <br />
                <label
                  className="text-indigo-600 font-medium flex items-center justify-center"
                  for="sole"
                >
                  Sole
                </label>
              </div>
            </div>
            <a href="/orbit" className="flex justify-center items-center my-3">
              <button className="text-base text-white px-8 py-3 bg-indigo-600 rounded-md">
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
