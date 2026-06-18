
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
    const { nodes, materials } = useGLTF('/models/python-transformed.glb')
    return (
        // Pass downstream props here so position/rotation changes work
        <group {...props} dispose={null}>
            <mesh
                geometry={(nodes as any).Python_Python_0.geometry}
                material={materials.Python}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/python-transformed.glb')
