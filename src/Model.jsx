import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import ceilingShader from "./utils/CeilingShader";
import { RepeatWrapping } from 'three'

import WallGridMaterialZY from "./utils/WallsShader";
import { useVideoTexture } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/finalC51.glb");
   const texture = useVideoTexture("/video.mp4");
   const glasstexture = useTexture("/glass_effect.png");
   const glasstexture_01 = useTexture("/glass_effect_01.png");
   const glasstexture_02 = useTexture("/glass_effect_02.png");
   const wallRightTexture = useTexture("/Wall_Right.png");

   wallRightTexture.wrapS = RepeatWrapping
wallRightTexture.wrapT = RepeatWrapping

  useEffect(() => {
    const m = materials?.PaintStrokeGlass;
    if (m) {
      if (!m.emissive) m.emissive = new THREE.Color();
      m.emissive.set("#896969"); // marron
      m.needsUpdate = true;
    }
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.011"]}
        position={[-10.461, 5.408, -2.758]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.yellow_Lines}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.Podium}
        position={[8.536, 6.176, -11.823]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.001"]}
        position={[-0.114, 4.346, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Podium}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.yellow_Lines}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.004"]}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.Podium}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[-10.593, 11.705, -7.904]} >
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Grid_Walls.001"]}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      >
        <WallGridMaterialZY horizontalScale={0.3} verticalScale={1.0} lineWidth={0.02} color='#fffefeff' gridSize={5} />
        {/* <meshStandardMaterial horizontalScale={0.3} verticalScale={1.0} map={wallRightTexture}/> */}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Grid_Walls.001"]}
        position={[-0.114, 4.346, 0.45]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      >
        <WallGridMaterialZY horizontalScale={0.3} verticalScale={1.0} lineWidth={0.02} color='#fffefeff' gridSize={5} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.Grid_Walls_Back}
        position={[-0.114, 4.346, 31.874]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-16.456, -3.659, -23.813]}
      >
        <WallGridMaterialZY horizontalScale={0.3} verticalScale={1.0} lineWidth={0.02} color='#fffefeff' gridSize={5} />
      </mesh>
      <group position={[17.003, 1.7, 7.692]} scale={[7.251, 0.038, 0.715]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube065.geometry} material={materials.YELLOW_lINES} />
        <mesh castShadow receiveShadow geometry={nodes.Cube065_1.geometry} material={materials["Material.001"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={materials["Material.011"]}
        position={[8.6, 0.635, 8.05]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-17.439, -2.716, -44.355]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        material={ceilingShader}
        position={[8.59, 12.259, -10.629]}
        scale={[17.931, 1, 0.376]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Podium} position={[0, 2.85, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shure_SM60_Shure_SM58_Mat_0.geometry}
        material={materials.Shure_SM58_Mat}
        position={[-0.392, 4.976, 0.077]}
        rotation={[-0.233, -0.458, 3.091]}
        scale={-0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 2.85, 0]}
        scale={[1.232, 2.119, 1.252]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Material}
        position={[0, 2.85, 0]}
        scale={[1.232, 2.119, 1.252]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials.Material} />
      <group position={[0.034, 5.237, 0.433]} rotation={[-Math.PI / 2, 0, 1.626]} scale={0.033}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_PRP_micrSenh_LP_T_PRP_mic_0.geometry}
            material={materials.T_PRP_mic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.1}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.008"]}
        position={[-6.253, 3.836, -12.975]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-2.788, -3.391, -3.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.003"]}
        position={[23.294, 7.625, -13.047]}
        scale={[2.727, 0.939, 0.214]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.003"]}
        position={[23.294, 7.625, -13.047]}
        rotation={[0.251, 0, 0]}
        scale={[2.772, 0.939, 0.214]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.009"]}
        position={[23.294, 7.625, -13.047]}
        rotation={[0.251, 0, 0]}
        scale={[2.772, 0.939, 0.214]}
      >        <meshStandardMaterial
    color={"#1f1414"}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.008"]}
        position={[23.298, 3.836, -12.975]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-2.788, -3.391, -3.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["Material.003"]}
        position={[-6.241, 7.625, -13.047]}
        scale={[2.759, 0.939, 0.214]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["Material.003"]}
        position={[-6.311, 7.625, -13.111]}
        rotation={[0.251, 0, 0]}
        scale={[2.772, 0.939, 0.214]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["Material.009"]}
        position={[-6.241, 7.625, -13.047]}
        rotation={[0.251, 0, 0]}
        scale={[2.805, 0.939, 0.214]}
      >
            <meshStandardMaterial
    color={"#1f1414"}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        // material={materials["Material.006"]}
        position={[8.734, 7.1, -10.629]}
        rotation={[Math.PI / 2, 3.14, 0]}
      >
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.005"]}
        position={[8.734, 12.149, -10.629]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, -6.975]}
        rotation={[Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.788, 0.925, 0.502]}
      >
       <meshStandardMaterial
    map={glasstexture}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.007"]}
        position={[-10.629, 10.811, -8.858]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.844, 1, 0.596]}
      >
   
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, -8.747]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.848, 0.925, 0.502]}
      >
                <meshStandardMaterial
    map={glasstexture_01}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, -10.562]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.796, 0.925, 0.502]}
      >
                <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.46, 10.888, -10.595]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.788, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_01}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.007"]}
        position={[27.576, 10.811, -8.713]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.844, 1, 0.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.46, 10.888, -8.824]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.848, 0.925, 0.502]}
      >
                <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.46, 10.888, -7.009]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.796, 0.925, 0.502]}
      >
                <meshStandardMaterial
    map={glasstexture}
    transparent
    
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, 32.605]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.788, 0.925, 0.502]}
      >
                <meshStandardMaterial
    map={glasstexture_01}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["Material.007"]}
        position={[-10.629, 10.811, 30.722]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.844, 1, 0.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, 30.833]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.848, 0.925, 0.502]}
      >
                <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, 29.018]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.796, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, 12.371]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.788, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_01}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials["Material.007"]}
        position={[-10.629, 10.811, 10.489]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.844, 1, 0.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, 10.6]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.848, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials.PaintStrokeGlass}
        position={[-10.514, 10.888, 8.785]}
        rotation={[-Math.PI / 2, 0.098, -Math.PI / 2]}
        scale={[0.796, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.479, 10.888, 8.751]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.788, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials["Material.007"]}
        position={[27.595, 10.811, 10.633]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.844, 1, 0.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.479, 10.888, 10.523]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.848, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_01}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.479, 10.888, 12.338]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.796, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.527, 10.888, 28.984]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.788, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["Material.007"]}
        position={[27.643, 10.811, 30.867]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.844, 1, 0.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.527, 10.888, 30.756]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.848, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_01}
    transparent
   
  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials.PaintStrokeGlass}
        position={[27.527, 10.888, 32.571]}
        rotation={[-Math.PI / 2, -0.098, Math.PI / 2]}
        scale={[0.796, 0.925, 0.502]}
      >        <meshStandardMaterial
    map={glasstexture_02}
    transparent
   
  /></mesh>
      <group position={[3.811, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={materials.White} />
      </group>
      <group position={[3.811, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_2.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_3.geometry} material={materials.White} />
      </group>
      <group position={[3.811, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder007_2.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder007_3.geometry} material={materials.White} />
      </group>
      <group position={[3.811, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder008_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder008_2.geometry} material={materials.White} />
      </group>
      <group position={[3.811, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009_2.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder009_3.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Black}
        position={[3.811, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["black metal"]}
        position={[3.811, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[3.811, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube024_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube024_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.Black}
        position={[3.811, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["black metal"]}
        position={[3.811, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["black metal"]}
        position={[3.811, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["black metal"]}
        position={[3.81, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[3.811, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane009_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane009_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.002"]}
        position={[3.81, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.Black}
        position={[3.811, 0.761, -6.923]}
        scale={0.047}
      />
      <group position={[6.175, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_2.geometry} material={materials.White} />
      </group>
      <group position={[6.175, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_2.geometry} material={materials.White} />
      </group>
      <group position={[6.175, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder003_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder003_2.geometry} material={materials.White} />
      </group>
      <group position={[6.175, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder004_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder004_2.geometry} material={materials.White} />
      </group>
      <group position={[6.175, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials.Black}
        position={[6.175, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["black metal"]}
        position={[6.175, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[6.175, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube026_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube026_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials.Black}
        position={[6.175, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["black metal"]}
        position={[6.175, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["black metal"]}
        position={[6.175, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials["black metal"]}
        position={[6.175, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[6.175, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane011_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane011_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.002"]}
        position={[6.174, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials.Black}
        position={[6.175, 0.761, -6.923]}
        scale={0.047}
      />
      <group position={[8.498, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder022_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder022_2.geometry} material={materials.White} />
      </group>
      <group position={[8.498, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder023_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder023_2.geometry} material={materials.White} />
      </group>
      <group position={[8.498, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder024_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder024_2.geometry} material={materials.White} />
      </group>
      <group position={[8.498, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder025_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder025_2.geometry} material={materials.White} />
      </group>
      <group position={[8.498, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder026_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder026_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={materials.Black}
        position={[8.498, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials["black metal"]}
        position={[8.498, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[8.498, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube028_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials.Black}
        position={[8.498, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials["black metal"]}
        position={[8.498, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials["black metal"]}
        position={[8.498, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials["black metal"]}
        position={[8.498, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[8.498, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane013_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane013_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.002"]}
        position={[8.497, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={materials.Black}
        position={[8.498, 0.761, -6.923]}
        scale={0.047}
      />
      <group position={[11.187, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder033_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder033_2.geometry} material={materials.White} />
      </group>
      <group position={[11.187, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder034_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder034_2.geometry} material={materials.White} />
      </group>
      <group position={[11.187, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder035_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder035_2.geometry} material={materials.White} />
      </group>
      <group position={[11.187, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder036_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder036_2.geometry} material={materials.White} />
      </group>
      <group position={[11.187, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder037_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder037_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder038.geometry}
        material={materials.Black}
        position={[11.187, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder039.geometry}
        material={materials["black metal"]}
        position={[11.187, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[11.187, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube030_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube030_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder040.geometry}
        material={materials.Black}
        position={[11.187, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder041.geometry}
        material={materials["black metal"]}
        position={[11.187, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder042.geometry}
        material={materials["black metal"]}
        position={[11.187, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["black metal"]}
        position={[11.186, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[11.187, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane015_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane015_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.002"]}
        position={[11.186, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043.geometry}
        material={materials.Black}
        position={[11.187, 0.761, -6.923]}
        scale={0.047}
      />
      <group position={[13.797, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder044_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder044_2.geometry} material={materials.White} />
      </group>
      <group position={[13.797, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder045_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder045_2.geometry} material={materials.White} />
      </group>
      <group position={[13.797, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder046_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder046_2.geometry} material={materials.White} />
      </group>
      <group position={[13.797, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder047_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder047_2.geometry} material={materials.White} />
      </group>
      <group position={[13.797, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder048_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder048_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder049.geometry}
        material={materials.Black}
        position={[13.797, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials["black metal"]}
        position={[13.797, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[13.797, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube032_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube032_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials.Black}
        position={[13.797, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder052.geometry}
        material={materials["black metal"]}
        position={[13.797, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053.geometry}
        material={materials["black metal"]}
        position={[13.797, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["black metal"]}
        position={[13.796, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[13.797, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane017_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane017_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.002"]}
        position={[13.796, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials.Black}
        position={[13.797, 0.761, -6.923]}
        scale={0.047}
      />
      <group position={[15.99, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder055_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder055_2.geometry} material={materials.White} />
      </group>
      <group position={[15.99, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder056_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder056_2.geometry} material={materials.White} />
      </group>
      <group position={[15.99, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder057_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder057_2.geometry} material={materials.White} />
      </group>
      <group position={[15.99, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder058_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder058_2.geometry} material={materials.White} />
      </group>
      <group position={[15.99, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder059_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder059_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder060.geometry}
        material={materials.Black}
        position={[15.99, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder061.geometry}
        material={materials["black metal"]}
        position={[15.99, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[15.99, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube034_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube034_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder062.geometry}
        material={materials.Black}
        position={[15.99, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063.geometry}
        material={materials["black metal"]}
        position={[15.99, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder064.geometry}
        material={materials["black metal"]}
        position={[15.99, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["black metal"]}
        position={[15.989, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[15.99, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane019_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane019_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials["Material.002"]}
        position={[15.988, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder065.geometry}
        material={materials.Black}
        position={[15.99, 0.761, -6.923]}
        scale={0.047}
      />
      <group position={[18.547, 0.761, -6.923]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder066_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder066_2.geometry} material={materials.White} />
      </group>
      <group position={[18.547, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder067_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder067_2.geometry} material={materials.White} />
      </group>
      <group position={[18.547, 0.761, -6.923]} rotation={[Math.PI / 2, 0, 0.63]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_2.geometry} material={materials.White} />
      </group>
      <group position={[18.547, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -0.627]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder069_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder069_2.geometry} material={materials.White} />
      </group>
      <group position={[18.547, 0.761, -6.923]} rotation={[Math.PI / 2, 0, -1.887]} scale={[0.079, 0.049, 0.079]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder070_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder070_2.geometry} material={materials.White} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder071.geometry}
        material={materials.Black}
        position={[18.547, 0.761, -6.923]}
        rotation={[0, -1.257, 0]}
        scale={[0.179, 0.158, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder072.geometry}
        material={materials["black metal"]}
        position={[18.547, 0.761, -6.923]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.067}
      />
      <group position={[18.547, 0.761, -6.923]} rotation={[0, -Math.PI / 2, 0]} scale={[0.069, 0.056, 0.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube036_1.geometry} material={materials.Black} />
        <mesh castShadow receiveShadow geometry={nodes.Cube036_2.geometry} material={materials["black metal"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder073.geometry}
        material={materials.Black}
        position={[18.547, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder074.geometry}
        material={materials["black metal"]}
        position={[18.547, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder075.geometry}
        material={materials["black metal"]}
        position={[18.547, 0.761, -6.923]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials["black metal"]}
        position={[18.547, 1.646, -7.43]}
        scale={[0.071, 0.013, 0.056]}
      />
      <group position={[18.547, 2.269, -7.509]} rotation={[Math.PI / 2, 0, 0]} scale={[0.056, 0.047, 0.052]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane021_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane021_2.geometry} material={materials["Material.010"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials["Material.002"]}
        position={[18.546, 0.761, -6.923]}
        scale={0.566}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder076.geometry}
        material={materials.Black}
        position={[18.547, 0.761, -6.923]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.YELLOW_lINES}
        position={[11.282, 1.708, -2.559]}
        scale={[8.293, 1, 0.712]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials.YELLOW_lINES}
        position={[11.282, 1.708, -2.559]}
        scale={[8.293, 1, 0.712]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials.YELLOW_lINES}
        position={[11.282, 1.708, -2.559]}
        scale={[8.293, 1, 0.712]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials.Table_Lines_texture}
        position={[11.282, 1.708, -2.559]}
        scale={[8.293, 1, 0.712]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials.Podium}
        position={[-10.461, 5.538, 0.829]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[6.819, 1, 3.207]}
      />
      <group position={[0, 13.333, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-10.2, -7.776, -2.827]} scale={[0.027, 0.031, 0.027]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Blinds}
              position={[-3.291, -11.038, 0.037]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial002.geometry}
              material={materials.Blinds}
              position={[1387.938, -11.038, 271.741]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial004.geometry}
              material={materials.Blinds}
              position={[-3.291, -11.038, 739.624]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial010.geometry}
              material={materials.Blinds}
              position={[1392.144, -11.038, 1005.977]}
              rotation={[Math.PI, 0, Math.PI]}
            />
          </group>
          <group position={[-10.2, 5.778, 4.303]} scale={[0.027, 0.031, 0.027]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial001.geometry}
              material={materials.Blinds}
              position={[-3.291, -440.123, 0.037]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial003.geometry}
              material={materials.Blinds}
              position={[1387.938, -440.123, -256.508]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial005.geometry}
              material={materials.Blinds}
              position={[-3.291, -440.123, 739.624]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial006.geometry}
              material={materials.Blinds}
              position={[-3.291, -432.8, 1588.577]}
              scale={[1, 0.905, 1.034]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial007.geometry}
              material={materials.Blinds}
              position={[96.227, -334.153, 2322.809]}
              rotation={[0, 1.571, 0]}
              scale={[1, 0.762, 0.773]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial008.geometry}
              material={materials.Blinds}
              position={[675.815, -334.356, 2322.809]}
              rotation={[0, 1.571, 0]}
              scale={[1, 0.811, 0.835]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial009.geometry}
              material={materials.Blinds}
              position={[1289.831, -334.226, 2322.865]}
              rotation={[0, 1.571, 0]}
              scale={[0.962, 0.78, 0.803]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial011.geometry}
              material={materials.Blinds}
              position={[1386.32, -440.123, 477.727]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial012.geometry}
              material={materials.Blinds}
              position={[1390.646, -432.8, 1588.577]}
              scale={[1, 0.905, 1.034]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials.Podium}
        position={[27.442, 5.538, 0.853]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[6.819, 1, 3.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials.Podium}
        position={[-10.461, 5.538, 20.796]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[6.819, 1, 3.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials.Podium}
        position={[27.555, 5.538, 20.675]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[6.819, 1, 3.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials.Podium}
        position={[-10.368, 5.718, 47.181]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.297, 1, 2.973]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials.Podium}
        position={[-7.609, 8.787, 67.091]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.465, 1, 2.503]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials.Podium}
        position={[8.038, 8.794, 67.091]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.661, 1, 2.661]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials.Podium}
        position={[24.614, 8.79, 67.089]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.56, 0.962, 2.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials.Podium}
        position={[27.263, 5.718, 47.181]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.297, 1, 2.973]}
      />
      <group position={[-10.005, 10.948, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0.geometry}
                material={materials.Fan_blade}
                position={[0.162, 0.152, -6.952]}
                rotation={[1.528, 0.838, 0.081]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0001.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0002.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[-0.848, -13.487, -4.032]}>
            <mesh castShadow receiveShadow geometry={nodes.Line002_speed_control_0.geometry} material={materials.speed_control} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0001.geometry}
              material={materials.speed_control}
              position={[-140.638, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0002.geometry}
              material={materials.speed_control}
              position={[-235.785, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0003.geometry}
              material={materials.speed_control}
              position={[-454.591, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0004.geometry}
              material={materials.speed_control}
              position={[-555.618, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0005.geometry}
              material={materials.speed_control}
              position={[-554.77, 0, 337.325]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0006.geometry}
              material={materials.speed_control}
              position={[-450.919, 0, 336.684]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0007.geometry}
              material={materials.speed_control}
              position={[-327.787, 0, 336.684]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0008.geometry}
              material={materials.speed_control}
              position={[-235.475, 0, 336.684]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0009.geometry}
              material={materials.speed_control}
              position={[-135.131, 0, 336.684]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line002_speed_control_0010.geometry}
              material={materials.speed_control}
              position={[46.562, 0, 336.684]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0.geometry}
              material={materials.Motor}
              position={[0, -2.888, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011__0.geometry}
            material={materials.Cylinder011__0}
            position={[-0.857, -17.975, -4.032]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0.geometry}
            material={materials.speed_control}
            position={[0.848, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[-10.005, 10.948, 15.774]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0001"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0001.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0001.geometry}
                material={materials.Fan_blade}
                position={[0.066, 0.353, -6.388]}
                rotation={[1.456, -0.863, -3.066]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0003.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0004.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0005.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0001.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0001.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0001.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0001.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0001.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0001.geometry}
              material={materials.Motor}
              position={[0, -2.888, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0001.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0001.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0001"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0001.geometry}
            material={materials.speed_control}
            position={[0.848, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[-10.005, 10.948, 26.446]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0002"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0002.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0002.geometry}
                material={materials.Fan_blade}
                position={[0.754, -0.154, -6.476]}
                rotation={[1.377, 0.91, 0.383]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0006.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0007.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0008.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0002.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0002.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0002.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0002.geometry}
                material={materials.Motor}
                position={[0.032, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0002.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0002.geometry}
              material={materials.Motor}
              position={[0, -2.888, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0002.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0002.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0002"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0002.geometry}
            material={materials.speed_control}
            position={[0.848, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[-10.005, 10.948, 50.988]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0003"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0003.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0003.geometry}
                material={materials.Fan_blade}
                position={[0.399, 0.207, -6.402]}
                rotation={[1.364, 0.742, 0.452]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0009.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0010.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0011.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0003.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0003.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0003.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0003.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0003.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0003.geometry}
              material={materials.Motor}
              position={[0, -2.888, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0003.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0003.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0003"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0003.geometry}
            material={materials.speed_control}
            position={[0.848, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[-10.005, 10.948, 62.32]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0004"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0004.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0004.geometry}
                material={materials.Fan_blade}
                position={[0.822, 0.977, -6.401]}
                rotation={[1.622, 0.936, 0.244]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0012.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0013.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0014.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0004.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0004.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0004.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0004.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0004.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0004.geometry}
              material={materials.Motor}
              position={[0, -2.888, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0004.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0004.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0004"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0004.geometry}
            material={materials.speed_control}
            position={[0.847, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[26.926, 10.948, 62.415]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0005"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0005.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0005.geometry}
                material={materials.Fan_blade}
                position={[-0.217, 0.024, -7.755]}
                rotation={[1.467, -0.873, -3.131]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0015.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0016.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0017.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0005.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0005.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0005.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0005.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0005.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0005.geometry}
              material={materials.Motor}
              position={[0, -2.888, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0005.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0005.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0005"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0005.geometry}
            material={materials.speed_control}
            position={[0.847, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[26.854, 10.948, 50.767]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0006"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0006.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0006.geometry}
                material={materials.Fan_blade}
                position={[0.362, 1.047, -8.491]}
                rotation={[1.22, 1.191, 0.245]}
                scale={0.684}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0018.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0019.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0020.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0006.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0006.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0006.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0006.geometry}
                material={materials.Motor}
                position={[0.032, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0006.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0006.geometry}
              material={materials.Motor}
              position={[0, -2.887, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0006.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0006.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0006"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0006.geometry}
            material={materials.speed_control}
            position={[0.847, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[26.854, 10.948, 36.956]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0007"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0007.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0007.geometry}
                material={materials.Fan_blade}
                position={[-0.187, -0.643, -7.808]}
                rotation={[1.293, -0.736, 3.032]}
                scale={0.664}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0021.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0022.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0023.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0007.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0007.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0007.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0007.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0007.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0007.geometry}
              material={materials.Motor}
              position={[0, -2.887, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0007.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0007.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0007"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0007.geometry}
            material={materials.speed_control}
            position={[0.847, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[26.854, 10.948, 26.602]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0008"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0008.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0008.geometry}
                material={materials.Fan_blade}
                position={[-0.636, -0.758, -7.354]}
                rotation={[1.628, -0.771, -2.829]}
                scale={0.688}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0024.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0025.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0026.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0008.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0008.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0008.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0008.geometry}
                material={materials.Motor}
                position={[0.032, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0008.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0008.geometry}
              material={materials.Motor}
              position={[0, -2.887, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0008.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0008.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0008"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0008.geometry}
            material={materials.speed_control}
            position={[0.847, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[26.854, 10.948, 15.347]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0009"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0009.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0009.geometry}
                material={materials.Fan_blade}
                position={[-0.36, 0.29, -7.267]}
                rotation={[1.536, -0.83, -3.073]}
                scale={0.647}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0027.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0028.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0029.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0009.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0009.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0009.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0009.geometry}
                material={materials.Motor}
                position={[0.032, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0009.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0009.geometry}
              material={materials.Motor}
              position={[0, -2.887, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0009.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0009.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0009"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0009.geometry}
            material={materials.speed_control}
            position={[0.848, -13.487, -4.032]}
          />
        </group>
      </group>
      <group position={[26.854, 10.948, -5.032]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={4.416}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group position={[0, -1.827, 2.861]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.018, -3.059, -3.327]} rotation={[2.941, -0.01, -0.011]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder007_Material_#106_0010"].geometry}
                material={materials.Material_106}
                position={[0, 0, -0.213]}
              />
            </group>
            <group position={[0, -2.556, 1.622]} rotation={[1.745, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Fan_blade_0010.geometry}
                material={materials.Fan_blade}
                position={[0.009, -5.631, 1.699]}
                rotation={[1.195, -0.01, -0.011]}
              />
            </group>
            <group position={[0, -3.609, 1.382]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fan_blade_Fan_blade_0010.geometry}
                material={materials.Fan_blade}
                position={[-0.073, 0.455, -6.634]}
                rotation={[1.381, 0.919, 0.008]}
              />
            </group>
            <group position={[0, -3.785, 1.35]} rotation={[0.175, 0, 0]}>
              <group position={[0.016, 0.179, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0030.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0031.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Guard_Guard_0032.geometry}
                  material={materials.Guard}
                  position={[-0.002, -1.045, -6.654]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -3.646, 1.462]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Guard_cover_Guard_cover_0010.geometry}
                material={materials.Guard_cover}
                position={[-0.002, -1.031, -6.675]}
                rotation={[1.195, 0.011, -0.01]}
              />
            </group>
            <group position={[0, 3.524, -2.665]} rotation={[0.175, 0, 0]}>
              <group position={[0, -2.888, 1.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.motor1_Motor_0010.geometry}
                  material={materials.Motor}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, 0.935, -1.226]} rotation={[0.175, 0, 0]}>
              <group position={[0, -0.587, -0.025]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object007_steel_0010.geometry}
                  material={materials.steel}
                  position={[-0.003, 0.005, -1.262]}
                  rotation={[1.195, 0.011, -0.01]}
                />
              </group>
            </group>
            <group position={[0, -6.489, 0.874]} rotation={[-1.396, 0, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ornament_Motor_0010.geometry}
                material={materials.Motor}
                position={[0.033, -9.32, 0.887]}
                rotation={[-1.195, -0.01, 0.011]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_Motor_0010.geometry}
              material={materials.Motor}
              position={[0.02, -2.968, -3.097]}
              rotation={[2.941, -0.01, -0.011]}
            />
          </group>
          <group position={[0, -5.122, -0.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Motor_Motor_0010.geometry}
              material={materials.Motor}
              position={[0, -2.887, 1.843]}
            />
          </group>
          <group position={[0, -3.255, 2.007]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object008_steel_0010.geometry}
              material={materials.steel}
              position={[0, -0.587, -0.025]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box001_Motor_0010.geometry}
            material={materials.Motor}
            position={[0, -9.735, -2.987]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder012_Material_#107_0010"].geometry}
            material={materials.Material_107}
            position={[0, -10.087, -3.167]}
            rotation={[0, 0, 0.611]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_speed_control_0010.geometry}
            material={materials.speed_control}
            position={[0.848, -13.487, -4.032]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/finalC51.glb");
