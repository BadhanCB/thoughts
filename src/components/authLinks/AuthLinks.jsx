"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const status = "authenticated";

    return (
        <>
            {status === "authenticated" ? (
                <>
                    <Link className={styles.link} href="/write">
                        Write
                    </Link>
                    <button className={`${styles.logout} ${styles.link}`}>Logout</button>
                </>
            ) : (
                <Link
                    className={styles.link}
                    href="/login"
                >
                    Login
                </Link>
            )}
            <FiAlignRight
                onClick={() => setOpen((prev) => !prev)}
                className={styles.hamburger}
            />
            {open && (
                <div className={styles.mobilemenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">About</Link>
                    {status === "authenticated" ? (
                        <>
                            <Link href="/write">Write</Link>
                            <button className={`${styles.logout}`}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;
