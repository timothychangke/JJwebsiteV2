import Head from 'next/head'
import Navbar from '../components/general/Navbar'
import CTA from '../components/general/CTA'
import GameGrid from './GameGrid'
import styles from '../styles/GamesCatalogue.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <Head>
        <title>Institutions - Level Up Classroom Learning With Play</title>
        <meta name="description" content="Level Up Classroom Learning With Play" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <h2>Institutions</h2>
          <h1>Level Up Classroom </h1>
          <h1> Learning With Play</h1>
        </div>

        <div className={styles.tabs}>
          <button className={styles.active}>Games</button>
          <button>Implementation</button>
          <button>Getting Started</button>
        </div>

        <div className={styles.games}>
          <GameGrid/>

        </div>
        <CTA/>
      </main>
    </div>
  )
}
