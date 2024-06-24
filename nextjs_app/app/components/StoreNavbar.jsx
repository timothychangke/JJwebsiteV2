'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './storenavbar.module.css';

export default function HorizontalNavbar({ username }) {
  return (
    <div className={styles.navbar}>
      <img src="/JJLogo.png" alt="Company Logo" className={styles.logo} />
        <div className={styles.navButtonContainer}>
          <button className={styles.navButton}>Institutions</button>
          <button className={styles.navButton}>Organisations</button>
          <button className={styles.navButton}>Individuals</button>
        </div>
      <div className={styles.username}>{username}</div>
    </div>
  );
}
