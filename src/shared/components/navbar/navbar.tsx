'use client'
import React from 'react'
import styles from './navbar.module.css'
import Logo from '@/shared/icons/logo'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/ui/custom-button/custom-button.types'

const Navbar = () => {
  const closeNavbar = () => {
    document.querySelector('#nav-container')?.classList.remove(styles.active)
  }

  const handleToggleClass = () => {
    document.querySelector('#nav-container')?.classList.add(styles.active)
  }

  return (
    <nav className={styles['nav']}>
      <div className={styles['nav__logo-links']}>
        <div className={styles['nav__logo']}>
          <Logo width={150} height={28} />
        </div>
        <div className={styles['nav__links']} id="nav-container">
          <button className={`${styles['close-button']}`} onClick={closeNavbar}>
            &times;
          </button>
          <a href="#">About</a>
          <a href="#">Why</a>
          <a href="#">Benefits</a>
          <a href="#">Token Sale</a>
          <a href="#">Roadmap</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>

        <div className={`${styles['nav__hamburger']}`} onClick={handleToggleClass}>
          Menu
        </div>
      </div>

      <div className={styles['nav__button-box']}>
        <div className={styles['nav__controls']}>
          {/* Select Box */}
          <select className={styles['nav__dropdown']} defaultValue="english">
            <option value="english">English</option>
            <option value="urdu">French</option>
            <option value="italic">Italic</option>
          </select>

          <CustomButton type={CustomButtonTypes.PRIMARY}>Connect Wellet</CustomButton>
          <CustomButton type={CustomButtonTypes.OUTLINE}>Pre-sale</CustomButton>
        </div>
      </div>
      <div className=""></div>
    </nav>
  )
}

export default Navbar
