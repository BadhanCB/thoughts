"use client"
// import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css';
// import { FaFacebook } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const Login = () => {
    const { status } = useSession();
    const router = useRouter();
    
    if(status === 'loading'){
        return <main className={styles.loginpage}>
            <section><h1>Loading...</h1></section>
        </main>
    } else if(status === 'authenticated'){
        router.push('/');
    }

    return (
        <main className={styles.loginpage}>
            <section className={styles.loginOptions}>
                {/* <button className={styles.loginBtn}><FcGoogle /> Sign in with Google</button> */}
                <button onClick={() => signIn('github')} className={styles.loginBtn}><FiGithub /> Sign in with GitHub</button>
                {/* <button className={`${styles.loginBtn} ${styles.facebook}`}><FaFacebook /> Log in with Facebook</button> */}
            </section>
        </main>
    );
};

export default Login;