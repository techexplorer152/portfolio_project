import React, { useState } from 'react';
import styles from './navbar.module.css';

interface NavLink {
    name: string;
    path: string;
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    const navigationLinks: NavLink[] = [
        { name: 'Home', path: '/home' },
        { name: 'Projects', path: '/projects' },
        { name: 'Stack', path: '/stack' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.logoArea}>
                    <span className={styles.pulseDot}></span>
                    <span className={styles.logoText}>SYS_NODE // TECHEXPLORER</span>
                </div>

                <div className={styles.navLinks}>
                    {navigationLinks.map((link) => (
                        <a key={link.path} href={link.path} className={styles.linkItem}>
                            {link.name}
                        </a>
                    ))}
                </div>

                <button
                    className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Intercept Menu"
                >
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>

            </div>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
                <div className={styles.mobileLinksWrapper}>
                    <span className={styles.mobileTerminalTag}>&gt;&gt; SELECT_NODE_PATH</span>
                    {navigationLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={styles.mobileLinkItem}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;