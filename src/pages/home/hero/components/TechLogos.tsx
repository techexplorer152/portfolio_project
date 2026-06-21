import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { Model as CppModel } from './models/C_plusplus';
import { Model as CSharpModel } from './models/C_sharp';
import { Model as JSModel } from './models/Javascript_logo__3d_model';
import { Model as ReactModel } from './models/React_logo';
import { Model as TSModel } from './models/Typescript_logo__3d_model';
import { Model as PythonModel } from './models/Python';

const OrbitingLogo = ({ children, radius, speed, angleOffset }: any) => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();
        const currentAngle = time * speed + angleOffset;

        meshRef.current.position.x = Math.cos(currentAngle) * radius;
        meshRef.current.position.y = Math.sin(currentAngle) * radius;
        meshRef.current.position.z = 0;

        meshRef.current.rotation.x = 0;
        meshRef.current.rotation.y = 0;
        meshRef.current.rotation.z = 0;
    });

    return <group ref={meshRef}>{children}</group>;
};

export const TechLogos = () => {
    const RADIUS = 3.0;
    const SPEED = 0.25;
    const TOTAL_LOGOS = 6;
    const STEP = (2 * Math.PI) / TOTAL_LOGOS;

    return (
        <group position={[0, 0, 0]}>
            <OrbitingLogo radius={RADIUS} speed={SPEED} angleOffset={STEP * 0}>
                <group scale={0.025}>
                    <CppModel />
                </group>
            </OrbitingLogo>

            <OrbitingLogo radius={RADIUS} speed={SPEED} angleOffset={STEP * 1}>
                <group scale={0.025}>
                    <PythonModel />
                </group>
            </OrbitingLogo>

            <OrbitingLogo radius={RADIUS} speed={SPEED} angleOffset={STEP * 2}>
                <group scale={0.025}>
                    <CSharpModel />
                </group>
            </OrbitingLogo>

            <OrbitingLogo radius={RADIUS} speed={SPEED} angleOffset={STEP * 3}>
                <group scale={12.5}>
                    <JSModel />
                </group>
            </OrbitingLogo>

            <OrbitingLogo radius={RADIUS} speed={SPEED} angleOffset={STEP * 4}>
                <group scale={0.32}>
                    <ReactModel />
                </group>
            </OrbitingLogo>

            <OrbitingLogo radius={RADIUS} speed={SPEED} angleOffset={STEP * 5}>
                <group scale={12.5}>
                    <TSModel />
                </group>
            </OrbitingLogo>
        </group>
    );
};

export default TechLogos;