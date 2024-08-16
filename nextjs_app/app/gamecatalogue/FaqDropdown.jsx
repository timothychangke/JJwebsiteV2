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
      <MainDropdown title="Usage Scenarios">
        <h3>1. Character Education Modules</h3>
        <p>Every youth should learn these vital life lessons but making the lessons engaging shouldn't solely fall on the teacher. Use our modules to teach Character Education content in a fun and interactive way.</p>
        <video width="100%" controls>
          <source src="path_to_your_video_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <h3>2. Topical Teaching Aids</h3>
        <p>Enhance your lessons with teaching aids that illustrate key concepts clearly or give teachers a much-needed break. For instance, use tools to help students grasp social inequality in social studies or play our recycling game to teach chemistry concepts.</p>
        <video width="100%" controls>
          <source src="path_to_your_video_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <h3>3. Volunteer/Community Project Identification Tool</h3>
        <p>Worried that students may not be fully committed to a project? Let them explore and understand the cause beforehand. Our games can provide the necessary theory and context in a safe virtual environment, preparing students in a mature and informed manner. It could even assist in their ideation!</p>
        
        <h3>4. Learning Journey Supplement/Replacement</h3>
        <p>Sometimes it's a hassle to visit a location in person. Use our time-effective and cost-effective service to bring the event experience directly to your classroom. Save time and money, all while in the comfort of your classroom.</p>
        
        <h3>5. Post-Exam Enrichment Activity</h3>
        <p>Waiting for the school holidays? Develop your students holistically with activities that are both fun and educational.</p>
        
        <h3>6. School Events</h3>
        <p>Celebrate occasions like Youth Environment Day with recycling games that promote environmental awareness.</p>
      </MainDropdown>
    </div>
  );
};

export default FaqDropdown;
