import React from 'react'
import styles from './navbar.module.css'
import Logo from '@/shared/icons/logo'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/ui/custom-button/custom-button.types'

const Navbar = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['nav__logo-links']}>
        <div className={styles['nav__logo']}>
          <Logo width={150} height={28} />
        </div>
        <div className={styles['nav__links']}>
          <a href="#">About</a>
          <a href="#">Why</a>
          <a href="#">Benefits</a>
          <a href="#">Token Sale</a>
          <a href="#">Roadmap</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
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
          <CustomButton type={CustomButtonTypes.OUTLINE}>pre-sale</CustomButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
