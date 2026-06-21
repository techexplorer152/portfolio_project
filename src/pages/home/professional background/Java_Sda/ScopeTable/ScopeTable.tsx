import styles from './ScopeTable.module.css';

const ScopeTable = () => {
    const syllabusData = [
        {
            id: 1,
            topic: "1. Introduction to Java programming",
            details: "Basics of Java language, Java advanced programming"
        },
        {
            id: 2,
            topic: "2. Software engineering",
            details: "Design patterns and good practices, Software testing"
        },
        {
            id: 3,
            topic: "3. Databases",
            details: "SQL databases, JDBC, Hibernate"
        },
        {
            id: 4,
            topic: "4. Frontend and backend technologies",
            details: "HTML, CSS & JavaScript, Frontend technologies, Spring framework"
        },
        {
            id: 5,
            topic: "5. Projects",
            details: "Practical project, Final project"
        }
    ];

    return (
        <div className={styles.scopeContainer}>
            <div className={styles.tableHeader}>
                <h2>GENERAL SCOPE</h2>
                <span className={styles.registrationNo}>Register entry no: AL/09/08/2024</span>
            </div>

            <table className={styles.scopeTable}>
                <thead>
                <tr>
                    <th>Module / Topic</th>
                    <th>Curriculum Details</th>
                </tr>
                </thead>
                <tbody>
                {syllabusData.map((item) => (
                    <tr key={item.id}>
                        <td className={styles.topicCell}>{item.topic}</td>
                        <td className={styles.detailsCell}>{item.details}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScopeTable;