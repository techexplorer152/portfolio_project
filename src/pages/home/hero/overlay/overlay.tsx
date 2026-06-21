import styles from './overlay.module.css';

const Overlay = () => {

    const handlePrimaryClick = () => {
        window.location.hash = 'projects';
    };

    const handleSecondaryClick = () => {
        window.location.hash = 'contact';
    };

    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>
                    Modern, Scalable, Customer-Centric Clean Architecture
                </h1>
                <p>
                    Developing applications and cloud web systems by creating industry-standard code.
                    Using modern frameworks like React, C#, and Python, I engineer maintainable codebases designed to
                    handle data throughput while maintaining pixel-perfect, responsive user interfaces.
                </p>

                <div className={styles.Click_Me}>
                    <button onClick={handlePrimaryClick}>
                        View Projects
                    </button>
                    <button onClick={handleSecondaryClick}>
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;