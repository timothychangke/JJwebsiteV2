import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Page.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <Link href="/recycleme" legacyBehavior>
        <a className={styles.card}>
          <div className={styles.header}>RECYCLE ME</div>
          <div className={styles.icon}>♻️</div>
          <p>Students are tasked with real-life scenarios on how to recycle various different materials.</p>
          <div className={styles.footer}>
            <strong>Learning Objective:</strong>
            <p>To teach students about a simple yet often overlooked skill: recycling.</p>
          </div>
        </a>
      </Link>
      <div className={styles.card}>
        <div className={styles.header}>SUPERMARKET SCRAMBLE</div>
        <div className={styles.icon}>🏪</div>
        <p>Students are given a severely limited budget to shop at a supermarket with the goal of feeding a family.</p>
        <div className={styles.footer}>
          <strong>Learning Objective:</strong>
          <p>To allow students to understand the struggles of a homeless person who can’t even afford groceries for his family.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.header}>BISTRO</div>
        <div className={styles.icon}>🍽️</div>
        <p>Students are tasked with choosing a family’s dishes at a restaurant that would fit their needs while being sustainable.</p>
        <div className={styles.footer}>
          <strong>Learning Objective:</strong>
          <p>To teach students about the environmental impact of food, especially dishes they eat every day.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.header}>FAST FASHION</div>
        <div className={styles.icon}>👗</div>
        <p>Students are tasked with putting together different outfits that would have the least impact on the environment.</p>
        <div className={styles.footer}>
          <strong>Learning Objective:</strong>
          <p>To teach students about the environmental impact of different materials of the clothing they wear.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
