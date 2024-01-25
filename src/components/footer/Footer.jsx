import Image from "next/image";
import styles from "./footer.module.css";
import { FiAtSign, FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Brand logo"
                        width={50}
                        height={50}
                    />
                    <h2 className={styles.logoTitle}>Thoughts</h2>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur molestiae repudiandae aspernatur. Iusto ipsum
                    ratione dolor id ullam suscipit? Ipsum ea, molestiae cumque
                    quas dolorum dolore repellendus! Illo, corrupti totam?
                </p>
                <div className={styles.icons}>
                    <FiLinkedin size={24} />
                    <FiGithub size={24} />
                    <FiAtSign size={24} />
                    <FiGlobe size={24} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <h5 className={styles.title}>Pages</h5>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Blog</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                </div>
                <div className={styles.list}>
                    <h5 className={styles.title}>Tags</h5>
                    <Link href='/'>Style</Link>
                    <Link href='/'>Fasion</Link>
                    <Link href='/'>Coding</Link>
                    <Link href='/'>Travel</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
