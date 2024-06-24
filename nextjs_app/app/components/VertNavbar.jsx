'use client';
import { useState } from 'react';
import styles from './vertnavbar.module.css';
import { useRouter } from 'next/navigation';

export default function VertNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className={`${styles.navbar} ${isNavbarOpen ? styles.open : ''}`}>
      <button className={styles.navToggle} onClick={toggleNavbar}>
        ☰
      </button>
      <div className={styles.navbarHeader}>
        <img src= "/JJLogo.png" alt="Company Logo" />
      </div>
      <div className={styles.navContent}>
        <button onClick={() => router.push('/')}>Home</button>
        <button onClick={() => router.push('/store')}>Store</button>
        <button>Programmes</button>
        <button>Analytics</button>
        <button onClick={() => router.push('/recycleme')}>My Games</button>
        <button>Jalanski Affiliate Link</button>
        <div className={styles.navBottom}>
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
