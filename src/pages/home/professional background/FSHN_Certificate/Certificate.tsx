import styles from './Certificate.module.css';

const BootcampCertificate = () => {
    return (
        <div className={styles.container}>

            <div className={styles.certHeader}>
                <div className={styles.institutionGroup}>
                    <span className={styles.tagBadge}>University of Tirana</span>
                    <h2>Faculty of Natural Sciences</h2>
                    <h3>Department of Applied Mathematics</h3>
                </div>
                <div className={styles.durationBadge}>
                    20-Week Intensive
                </div>
            </div>


            <div className={styles.certBody}>
                <p className={styles.certLabel}>Official Training Verification</p>
                <h1 className={styles.certTitle}>
                    Building Full-Stack Applications with HTML, CSS, JavaScript and .NET Web API
                </h1>
            </div>


            <div className={styles.endorsementPanel}>
                <div className={styles.facultyMember}>
                    <p className={styles.role}>Instructor</p>
                    <p className={styles.name}>M.Sc. Ervis Trupja</p>
                </div>
                <div className={styles.facultyMember}>
                    <p className={styles.role}>Head of Department</p>
                    <p className={styles.name}>Prof. Assoc. Aurora Simoni</p>
                </div>
                <div className={styles.facultyMember}>
                    <p className={styles.role}>Dean of Faculty</p>
                    <p className={styles.name}>Prof. Dr. Eglantina Kalluçi</p>
                </div>
            </div>

            <div className={styles.pills}>
                <p>.NET Web API</p>
                <p>C#</p>
                <p>JavaScript</p>
                <p>HTML5 & CSS3</p>
                <p>Full-Stack Architecture</p>
            </div>
        </div>
    );
};

export default BootcampCertificate;