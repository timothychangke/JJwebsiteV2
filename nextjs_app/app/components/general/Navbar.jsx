'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (   
    <header className={styles.header}>
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <Image src="/images/JJlogo.svg" alt="Jalan Journey" width={100} height={100}/>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menu} onClick={toggleDropdown}>
            &#9776; Menu
          </div>
          {dropdownOpen && (
            <div className={styles.dropdown}>
              <a href="#about">About Us</a>
              <a href="#faq">FAQ</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#news">News & Media</a>
              <a href="#involved">Get Involved</a>
              <a href="#contact">Contact Us</a>
            </div>
          )}
        </div>
        <div className={styles.links}>
          <a href="#institutions">Institutions</a>
          <a href="#organisations">Organisations</a>
          <a href="#individuals">Individuals</a>
        </div>
        <div className={styles.auth}>
          <button className={styles.login}>Log In</button>
          <div className={styles.separator}></div>
          <button className={styles.signup}>Sign Up</button>
        </div>
      </nav>
            
      <div className={styles.vineContainer}>
        <Image src='/images/Vine2.svg' alt='Vine' layout='responsive' width={450} height={40} className={styles.vine} />
      </div>

    </header>
  )
}

export default Navbar
