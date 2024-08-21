'use client';
import { useState } from 'react';
import StoreNavbar from '../components/StoreNavbar';
import styles from './store.module.css';

export default function Store() {
  const [emails, setEmails] = useState(['']);
  const [selectedGame, setSelectedGame] = useState('');
  const [hoveredGame, setHoveredGame] = useState(null);

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const addEmailField = () => {
    setEmails([...emails, '']);
  };

  const removeEmailField = (index) => {
    if (emails.length > 1) {
      const newEmails = emails.filter((_, i) => i !== index);
      setEmails(newEmails);
    }
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const games = [
    { name: 'Environment & Sustainability', emoji: '🌱', description: 'Focuses on environmental conservation and sustainable practices.' },
    { name: 'Homelessness', emoji: '🏠', description: 'Addresses issues related to homelessness and provides support for affected individuals.' },
    { name: 'Special Needs', emoji: '🧠', description: 'Covers support and resources for individuals with special needs.' },
  ];

  return (
    <div className={styles.container}>
      <StoreNavbar username={"User"}/>
      
      <h2 className={`${styles.title}`}>Program Description</h2>
      <h2 className={styles.text}> Let us know some details about your program and we'll get everything set up!</h2>
      <div className={`${styles.segment} ${styles.descriptionSegment}`}>
        <label className={styles.segmentHeader}>Header Image</label>
        <h2 className={styles.text}> Attach an image to summarize your program.</h2>
        <div>
          <input type="file" accept="image/*" />
        </div>
      </div>

      <div className={`${styles.segment} ${styles.descriptionSegment}`}>
        <label className={styles.segmentHeader}>Program Description</label>
        <h2 className={styles.text}>This message will be sent out to all participants as a notification of the upcoming program.</h2>
        <textarea className={styles.textField} rows="4" cols="50"></textarea>
      </div>

      <div className={styles.segment}>
        <label className={styles.segmentHeader}>Game Select</label>
        <h2 className={styles.text}> Select the theme you intend to explore for your program.</h2>
        <div className={styles.gameSelection}>
          {games.map((game) => (
            <div
              key={game.name}
              className={`${styles.gameBox} ${selectedGame === game.name ? styles.selected : ''}`}
              onClick={() => handleGameSelect(game.name)}
            >
              <span className={selectedGame === game.name ? styles.emojiSelected : styles.emoji}>
                {game.emoji}
              </span>
              <p className={selectedGame === game.name ? styles.textSelected : styles.text}>
                {game.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.segment}>
        <label className={styles.segmentHeader}>Emails</label>
        <h2 className={styles.text}> Add participants' emails here for them to be notified of and receive access for this program.</h2>

        {emails.map((email, index) => (
          <div key={index} className={styles.emailField}>
            <input
              className={styles.textField}
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
            />
            {emails.length > 1 && (
              <button className={styles.removeButton} type="button" onClick={() => removeEmailField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button className={styles.addEmail} type="button" onClick={addEmailField}>
          Add Email
        </button>
      </div>

      <div className={styles.segment}>
        <label className={styles.segmentHeader}>Duration of Play</label>
        <h2 className={styles.text}> Let participants know when the program will be run! We will use this information to manage how long the game session will be available to participants.</h2>

        <div>
          <input className={styles.textField} type="date" />
          <input className={styles.textField} type="time" />
          <span> to </span>
          <input className={styles.textField} type="time" />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>Save as Draft</button>
        <button className={styles.button}>Publish</button>
      </div>
    </div>
  );
}
