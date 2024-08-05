import Image from 'next/image'
import styles from '../styles/GameCard.module.css'

const GameCard = ({ title, description, features, buttonText, type, image }) => {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} layout="responsive" width={50} height={50} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className={styles.values}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  )
}

export default GameCard
