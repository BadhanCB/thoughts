import Link from 'next/link';
import styles from './navbar.module.css';
import { FiAtSign, FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.social}>
                <FiLinkedin size={24} />
                <FiGithub size={24} />
                <FiAtSign size={24} />
                <FiGlobe size={24} />
            </div>
            <div className={styles.logo}>Thoughts</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link className={styles.link} href='/'>Homepage</Link>
                <Link className={styles.link} href='/'>Contact</Link>
                <Link className={styles.link} href='/'>About</Link>
                <AuthLinks />
            </div>
        </nav>
    );
};

export default Navbar;