import Link from 'next/link';
import styles from './authLinks.module.css';

const AuthLinks = () => {
  const status = 'notauthenticated';

  return (
    <>
    { status === 'authenticated' ? (<>
      <Link href={'/write'}>Write</Link>
      <button className={styles.logout}>Logout</button>
    </>) : (
      <Link href={'/login'}>Login</Link>
    )}
    </>
  )
}

export default AuthLinks;