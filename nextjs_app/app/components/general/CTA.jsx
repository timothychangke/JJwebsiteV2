import styles from '../../styles/CTA.module.css'

const CTA = () => {
  return (
    <section className={styles.cta}>
      <h3>So, Are You Ready To Walk With Us?</h3>
      <p>Gain Access To All Our Resources By Starting An Account</p>
      <button className={styles.createAccount}>Create an account</button>
      <div>
        <button className={styles.login}>Log in</button>
      </div>

    </section>
  )
}

export default CTA
