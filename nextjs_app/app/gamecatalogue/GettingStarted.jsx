import styles from '../styles/GettingStarted.module.css'
import Image from 'next/image'

const GettingStarted = () => {
  return (
    <div className={styles.container}>
      <h1>Create an Account</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          {/* Placeholder for the image */}
          <Image src="../images/ConfusedFlower.svg" alt="Flower" width={200} height={200} layout="intrinsic" className={styles.image} unoptimized={true} />
        </div>
        <div className={styles.textContainer}>
          <h2>What's next?</h2>
          <p>
            After creating an account, you will receive a confirmation email. Once confirmed, you can start using our content and gain access to:
          </p>
          <ul>
            <li>Supplementary materials</li>
            <li>Setting up your own class and inviting learners</li>
            <li>Managing and launching experiences on your own schedule</li>
            <li>Monitoring learner progress and performance</li>
          </ul>
          <p>
            Still have questions? Check out our <a href="#faq">FAQs</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
