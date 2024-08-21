import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import logo from '/public/images/JJLogo.svg'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>News & Media</li>
            <li>Get Involved</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>OFFERINGS</h4>
          <ul>
            <li>Institutions</li>
            <li>Organisation</li>
            <li>Individuals</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>HELP & SUPPORT</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Terms & Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>SOCIALS</h4>
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Image src={logo} alt="Company Logo" width={100} height={100} />
        <p>© 2024 JALAN JOURNEY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
