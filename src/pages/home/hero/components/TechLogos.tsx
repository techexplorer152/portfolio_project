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
        meshRef.current.position.z = 0;
        meshRef.current.position.y = Math.sin(currentAngle) * radius;

        meshRef.current.rotation.x = 0;
        meshRef.current.rotation.y = 0;
        meshRef.current.rotation.z = 0;
    });

    return <group ref={meshRef}>{children}</group>;
};

export const TechLogos = () => {
    const SPEED = 0.2;

    return (
        <>
            <OrbitingLogo radius={3.2} speed={SPEED} angleOffset={0}>
                <CppModel scale={0.02} />
            </OrbitingLogo>

            <OrbitingLogo radius={4.0} speed={SPEED * 0.9} angleOffset={1}>
                <PythonModel scale={0.02} />
            </OrbitingLogo>

            <OrbitingLogo radius={4.8} speed={SPEED * 0.8} angleOffset={2}>
                <CSharpModel scale={0.02} />
            </OrbitingLogo>

            <OrbitingLogo radius={5.6} speed={SPEED * 0.7} angleOffset={3}>
                <JSModel scale={6} />
            </OrbitingLogo>

            <OrbitingLogo radius={6.4} speed={SPEED * 0.6} angleOffset={4}>
                <ReactModel scale={0.2} />
            </OrbitingLogo>

            <OrbitingLogo radius={7.2} speed={SPEED * 0.5} angleOffset={5}>
                <TSModel scale={6} />
            </OrbitingLogo>
        </>
    );
};

export default TechLogos;