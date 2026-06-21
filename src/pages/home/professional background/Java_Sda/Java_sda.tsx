import styles from './Java_sda.module.css';
import Table_java from './ScopeTable/ScopeTable.tsx';
import Java_img from './Programer22.jpg'

const Java_sda = () => {
    return (
        <div
            className={styles.container}
            style={{
                backgroundImage: `url(${Java_img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className={styles.Head_section}>
                <h1>Java from Scratch Course</h1>
                <p>Completed the following course:</p>
            </div>
            <Table_java />
        </div>
    );
};

export default Java_sda;