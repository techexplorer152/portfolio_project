import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props: any) {
  const group = React.useRef<any>()
  const { scene, animations } = useGLTF('/models/laptop_with_code-transformed.glb') as any
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as any
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const animationNames = Object.keys(actions)
    if (animationNames.length > 0) {
      const openAction = actions[animationNames[0]]
      if (openAction) {
        openAction.clampWhenFinished = true
        openAction.setLoop(1, 1)
        openAction.play()
      }
    }
  }, [actions])

  return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <primitive object={nodes.GLTF_created_0_rootJoint} />
          <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_16.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.motif} skeleton={nodes.Object_19.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_22.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.motif_non} skeleton={nodes.Object_25.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_28.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_31.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.PaletteMaterial003} skeleton={nodes.Object_34.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_37.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_40.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_43.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_46.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_49.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_52.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_55.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_58.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_61.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_64.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_67.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_70.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_73.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.material_16} skeleton={nodes.Object_76.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.motif_v23} skeleton={nodes.Object_79.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.PaletteMaterial004} skeleton={nodes.Object_82.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_85.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Object_88.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials.motif} skeleton={nodes.Object_91.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.motif_2} skeleton={nodes.Object_94.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_97.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.PaletteMaterial005} skeleton={nodes.Object_100.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.layar} skeleton={nodes.Object_103.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.PaletteMaterial004} skeleton={nodes.Object_106.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials.PaletteMaterial004} skeleton={nodes.Object_109.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
          <skinnedMesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.PaletteMaterial005} skeleton={nodes.Object_112.skeleton} position={[0, -0.122, -1.257]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
  )
}

useGLTF.preload('/models/laptop_with_code-transformed.glb')