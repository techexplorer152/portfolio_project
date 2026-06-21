import { Model as LaptopModel } from './models/Laptop_with_code';

const Laptop_3D = () => {
    return (
        <group position={[0, -0.1, -0.4]} scale={0.45} rotation={[0.6, 0, 0]}>
            <LaptopModel />
        </group>
    );
};

export default Laptop_3D;