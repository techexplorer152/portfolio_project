import styles from './footer.module.css'
import laptop from './img2.png'
import insta_icon from './img/insta5554.png'
import email_icon from './img/email-icon.png'
import whatsapp_icon from './img/whatsapp_152740.png'
import linkedin_icon from './img/linkedin123.png'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <div className={styles.banner}>
                    <div>
                        <img src={laptop} style={{ maxWidth: "200px", maxHeight: "200px" }} alt="Laptop Graphic" />
                    </div>
                    <div className={styles.banner_email}>
                        <h1>
                            Reach out to me by sending a short message here!
                        </h1>
                        <textarea
                            spellCheck={false}
                            placeholder="Type your message here..."
                            rows={6}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.row2}>
                <div className={styles.brandColumn}>
                    <div className={styles.brandLogoSection}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#2563eb" fillOpacity="0.15"/>
                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#2563eb"/>
                        </svg>
                        <h2>Consistency compounds!</h2>
                    </div>
                    <p className={styles.brandDescription}>
                        I like to practice and develop my professional skills everyday hoping to achieve great success!
                    </p>

                    <div className={styles.socialIconsGroup}>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialIconLink}>
                            <img src={linkedin_icon} alt="LinkedIn" className={styles.socialIconImg} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialIconLink}>
                            <img src={insta_icon} alt="Instagram" className={styles.socialIconImg} />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className={styles.socialIconLink}>
                            <img src={whatsapp_icon} alt="WhatsApp" className={styles.socialIconImg} />
                        </a>
                        <a href="mailto:sonycena844@gmail.com" target="_blank" rel="noreferrer" className={styles.socialIconLink}>
                            <img src={email_icon} alt="Email" className={styles.socialIconImg} />
                        </a>
                    </div>
                </div>

                <div className={styles.linkColumn}>
                    <h3>Company</h3>
                    <a href="/home">Home</a>
                    <a href="/stack">Stack</a>
                    <a href="/contact">Contact</a>
                    <a href="/projects">Projects</a>
                </div>

                <div className={styles.linkColumn}>
                    <h3>Support</h3>
                    <a href="/cv">View CV</a>
                    <a href="/GitHub">GitHub</a>
                    <a href="#webians">Project Documentation</a>
                    <a href="#feedback">Feedback</a>
                </div>

                <div className={styles.linkColumn}>
                    <h3>Contact</h3>
                    <div className={styles.contactItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>+355 33 333 333</span>
                    </div>
                    <div className={styles.contactItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>sonycena844@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className={styles.row3}>
                <div className={styles.copyrightText}>
                    © {new Date().getFullYear()} Keep Trying. All rights reserved.
                </div>
                <div className={styles.subFooterLinks}>
                    <span>Built with React & TS</span>
                    <a href="#hero">Back to Top ↑</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;