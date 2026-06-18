import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import Laptop_3D from './components/Laptop_3D.tsx';
import { TechLogos } from './components/TechLogos.tsx';
import Background_123 from './HeroBackground/HeroBackground.tsx';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroLayout} style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
            <Background_123 />

            <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                <Canvas camera={{ position: [0, 6, 8], fov: 50 }} shadows>
                    <ambientLight intensity={1.5} />
                    <hemisphereLight intensity={0.6} color="#ffffff" groundColor="#145277" />

                    <directionalLight position={[0, 12, 4]} intensity={2.5} castShadow />
                    <pointLight position={[-6, 5, 4]} intensity={1.5} color="#38bdf8" />
                    <pointLight position={[6, -2, 4]} intensity={1.5} color="#61dafb" />

                    <TechLogos />

                    <Center>
                        <Laptop_3D />
                    </Center>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;