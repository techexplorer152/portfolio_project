import React from 'react';
import styles from './contact.module.css';
import Email_img from './img/mail (1).png';
import Whats_img from './img/whatsapp-white-icon.png';
import Linkedin_img from './img/linkedin-white-icon.png';
import Form_con from './contact_form/Form_con.tsx';

const Contact = () => {
    return (
        <div className={styles.container} id="contact">
            <div className={styles.Part1}>
                <h1>Let's Build Something!</h1>
                <p>
                    I am actively exploring new engineering roles. If you have an open position
                    or want to discuss system architectures, drop me a line.
                </p>

                <div className={styles.contact_info}>
                    <p>
                        <img src={Email_img} alt="Email" />
                        techexplorer171@gmail.com
                    </p>
                    <p>
                        <img src={Whats_img} alt="WhatsApp" />
                        +22 222 222
                    </p>
                    <p>
                        <img src={Linkedin_img} alt="LinkedIn" />
                        Profile Here!
                    </p>
                </div>
            </div>
            <Form_con />
        </div>
    );
};

export default Contact;