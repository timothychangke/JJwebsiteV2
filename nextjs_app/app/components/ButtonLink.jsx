import Link from 'next/link';
import styles from '../styles/Games.module.css';

const ButtonLink = ({ href, children }) => {
  return (
    <Link legacyBehavior href={href} passHref>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};

export default ButtonLink;