import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const TempNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWithPhoto}>
        <div className={styles.photo}>
          <img src="/images/JJLogo.png" alt="Photo" />
        </div>
        <div className={styles.logo}>
          <Link href="/">Jalan Journey</Link>
        </div>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Institutions</Link>
        </li>
        <li>
          <Link href="/">Organisations</Link>
        </li>
        <li>
          <Link href="/">Individuals</Link>
        </li>
      </ul>
      <ul className={styles.regLinks}>
      <li>
          <Link legacyBehavior href="/" passHref>
            <a className={`${styles.button} ${styles.buttonTransparent}`}>Log In</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/" passHref>
            <a className={`${styles.button} ${styles.buttonPurple}`}>Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TempNavbar;