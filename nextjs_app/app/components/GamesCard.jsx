import styles from '../styles/Games.module.css';
import ButtonLink from './ButtonLink';

const GamesCard = ({ title, description, imageSrc, tags, linkRef, buttonText }) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={title} className={styles.image} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tag}>{tag}</span>
          ))}
        </div>
        <ButtonLink href={linkRef}>{buttonText}</ButtonLink>
      </div>
    );
  };
  
  export default GamesCard;