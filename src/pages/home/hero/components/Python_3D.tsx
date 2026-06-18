import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Model as PythonModel } from './models/Python';

const Python_3D = () => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        meshRef.current.position.y = Math.sin(time * 1.2) * 0.15 + 1.0;
        meshRef.current.rotation.y = time * 0.2;
    });

    return (
        <group ref={meshRef}>
            <PythonModel scale={0.01} />
        </group>
    );
};

export default Python_3D;