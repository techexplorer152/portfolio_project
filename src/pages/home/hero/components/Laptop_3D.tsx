import { Model as LaptopModel } from './models/Laptop_with_code';

const Laptop_3D = () => {
    return (
        <group position={[0, 0, 0]} scale={0.85}>
            <LaptopModel />
        </group>
    );
};

export default Laptop_3D;