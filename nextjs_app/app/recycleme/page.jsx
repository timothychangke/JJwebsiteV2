import React from 'react';
import styles from '../styles/RecycleMe.module.css';

const RecycleMe = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>RECYCLE ME</h1>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span>⏰</span> Learning Time: 2 hours
          </div>
          <div className={styles.infoItem}>
            <span>👥</span> Class Size: 30-40 students
          </div>
          <div className={styles.infoItem}>
            <span>💡</span> Learning Objective: Environment & Sustainability
          </div>
        </div>
      </header>

      <section className={styles.intro}>
        <p className={styles.description}>Students are given a variety of different materials and tasked with recycling them correctly through this fun and interactive game.</p>
        <div className={styles.videoContainer}>
          <video className={styles.video} controls>
            <source src="/videos/Recycle Me Short Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className={styles.background}>
        <h2 className={styles.sectionTitle}>BACKGROUND</h2>
        <p className={styles.paragraph}>Young people around the world are increasingly recognizing environmental issues as critical concerns. According to UNESCO's "World in 2030" survey, climate change and loss of biodiversity were identified as the most significant challenges, with 67% of young respondents highlighting these issues as top priorities. Yet, few are taking action. Why? Traditional education on environmental issues is not compelling. That is why we came up with a series of games to educate students on environmental sustainability including the Recycle Me game.</p>
      </section>

      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>ABOUT THE GAME</h2>
        <p className={styles.paragraph}>As one of the most effective ways to counter climate change and promote environmental sustainability, we teach students how to recycle through the Recycle Me game. With the help of experts from local charities, the Recycle Me game teaches students how to recycle different materials such as plastic PET bottles, dirty aluminum cans, pizza boxes, and glass bottles. Students are taught how to clean, cut, and process the material before recycling based on government standards.</p>
        <p className={styles.paragraph}>In this interactive game, students play the game as avatars that have to recycle materials given to them. They are given in-game points whenever they correctly recycle the material. If they make more than 5 mistakes trying to recycle the item, they are then walked through step-by-step how to recycle the material.</p>
      </section>
    </div>
  );
};

export default RecycleMe;