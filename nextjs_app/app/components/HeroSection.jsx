import styles from '../styles/Games.module.css';

const HeroSection = () => {
    return (
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Jalan Journey</h1>
          <p>Cultivate Deeper Empathy through Play</p>
          <p>We create games with meaningful social themes</p>
        </div>
      </section>
    );
  };
  
  export default HeroSection;