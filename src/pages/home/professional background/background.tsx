import styles from './background.module.css';
import BA_img from './img/img.png';
import JP_img from './img/img_1.png';
import Jva_sda from './Java_Sda/Java_sda.tsx';
import FSHN_oo from './FSHN_Certificate/Certificate.tsx';

const Background_of_me = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Head_of_me}>
                <h1>Professional Background and Training</h1>
                <p>
                    A collection of professional achievements and challenges overview
                    in display.
                </p>
            </div>

            <div className={styles.virtual_intern}>
                <div>
                    <img src={JP_img} alt="J.P. Morgan" />
                    <h1>J.P. Morgan Software Engineering</h1>
                    <p>
                        Completed a virtual internship featuring a modern
                        backend system, a miniature enterprise banking
                        backend using the same architectural ideas used
                        in large companies, using Kafka, Spring Boot,
                        and Java.
                    </p>
                    <div className={styles.pills}>
                        <p>Spring Boot Java</p>
                        <p>Kafka</p>
                        <p>REST APIs</p>
                        <p>Dependency Injection</p>
                        <p>Backend Development</p>
                    </div>
                </div>

                <div>
                    <img src={BA_img} alt="British Airways" />
                    <h1>British Airways Customer Behaviour & Demand Data Science</h1>
                    <p>
                        Split into 2 parts. I first did a deep analysis of a real
                        log of flights by cleaning, percentage calculations, and
                        made a demand estimation. Next, I built a Machine Learning
                        model using a Random Forest Classifier in Scikit-learn to
                        predict whether customers would complete a booking based
                        on historical customer data.
                    </p>
                    <div className={styles.pills}>
                        <p>Python</p>
                        <p>Pandas</p>
                        <p>Scikit-learn</p>
                        <p>Machine Learning</p>
                    </div>
                </div>
            </div>
            <Jva_sda />
            <FSHN_oo />
        </div>
    );
};

export default Background_of_me;