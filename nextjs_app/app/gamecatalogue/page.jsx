'use client'
import { useState } from 'react'
import Head from 'next/head'
import GameGrid from './GameGrid'
import Implementation from './Implementation'
import GettingStarted from './GettingStarted'
import styles from '../styles/GamesCatalogue.module.css'

const Home = () => {
  const [activeSegment, setActiveSegment] = useState('games')

  const renderSegment = () => {
    switch (activeSegment) {
      case 'games':
        return <GameGrid />
      case 'implementation':
        return <Implementation />
      case 'gettingStarted':
        return <GettingStarted />
      default:
        return <GameGrid />
    }
  }

  return (
    <div className={styles.container}>

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
        <button
            className={activeSegment === 'games' ? styles.active : ''}
            onClick={() => setActiveSegment('games')}
          >
            Games
          </button>
          <button
            className={activeSegment === 'implementation' ? styles.active : ''}
            onClick={() => setActiveSegment('implementation')}
          >
            Implementation
          </button>
          <button
            className={activeSegment === 'gettingStarted' ? styles.active : ''}
            onClick={() => setActiveSegment('gettingStarted')}
          >
            Getting Started
          </button>
        </div>

        <div className={styles.games}>
        {renderSegment()}
        </div>
      </main>
    </div>
  )
}

export default Home;