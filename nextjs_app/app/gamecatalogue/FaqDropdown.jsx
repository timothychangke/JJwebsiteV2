// components/FaqDropdown.js
import { useState } from 'react';
import styles from '../styles/FaqDropdown.module.css';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownSubBtn}>
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className={styles.dropdownContent}>{children}</div>}
    </div>
  );
};

const MainDropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownMainBtn}>
          {title}
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && <div className={styles.dropdownContent}>{children}</div>}
      </div>
    );
  };

const FaqDropdown = () => {
  return (
    <div className={styles.faqContainer}>
      <MainDropdown title="FAQ">
        <Dropdown title="How long does it take to set up?">
          <p>Setup is instantaneous. No downloads are required—players simply use their personal learning devices and join via the provided link.</p>
        </Dropdown>
        <Dropdown title="Do I need to download anything to use the game?">
          <p>We recommend using a laptop or tablet with a stable internet connection for the best experience.</p>
        </Dropdown>
        <Dropdown title="What devices can I use?">
          <Dropdown title="Device Types">
            <p>No downloads are necessary. It is a web browser plug-and-play game.</p>
          </Dropdown>
          <Dropdown title="Internet Requirements">
            <p>A stable internet connection is recommended for optimal performance.</p>
          </Dropdown>
        </Dropdown>
        <Dropdown title="Do I need to be tech-savvy to use the games?">
          <p>No, the games and instructions are intuitive and self-explanatory. Most students can navigate them independently. Additional support is available if needed.</p>
        </Dropdown>
        <Dropdown title="Do my students need to be tech-savvy?">
          <p>No, students generally find the games easy to use due to their digital literacy. They can typically navigate the games without assistance.</p>
        </Dropdown>
        <Dropdown title="How many players can play at once?">
          <p>Our games are designed to accommodate 1-5 players on a single device. Each device can be thought of as a single team sharing control of one player. Game modes are specified as either single device (one team playing alone) or multi-device (multiple teams interacting together in the game).</p>
        </Dropdown>
        <Dropdown title="How many connections should I get, and for how many students?">
          <p>We recommend grouping students into groups of 3-5, sharing one learning device. This promotes collaborative learning and peer reflection as they make collective decisions before taking action.</p>
        </Dropdown>
        <Dropdown title="Is there a minimum or maximum number of connections?">
          <p>Except for multi-device games, which require at least two (2) connections, our games can support from one (1) to an unlimited number of connections.</p>
        </Dropdown>
      </MainDropdown>
    </div>
  );
};

export default FaqDropdown;
