import React from 'react'
import styles from './header.module.css'
import Navbar from '@/shared/components/navbar/navbar'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/ui/custom-button/custom-button.types'
import ArrowRight from '@/shared/icons/arrow-right'

const Header = () => {
  return (
    <div className={styles['container']}>
      <Navbar />
      <div className={styles['wrapper']}>
        <div className={styles['header-content']}>
          <h1 className={styles['header-title']}>The 1st Social Network where likes have value</h1>
          <p className={styles['header-description']}>
            LEMON provides a unique way for Users to create, post & profit from their content. Based on other users
            opinion. Your opinion matters
          </p>
          <div className={styles['header-buttons']}>
            <CustomButton type={CustomButtonTypes.WHITE}>
              Lemon Pre-Sale{' '}
              <span className={styles['arrow-icon']}>
                <ArrowRight />
              </span>
            </CustomButton>
            <CustomButton type={CustomButtonTypes.WHITE}>
              White Paper{' '}
              <span className={styles['arrow-icon']}>
                <ArrowRight />
              </span>
            </CustomButton>
          </div>
        </div>
      </div>

      {/* <div className={styles["pre-sale-container"]}>
          <div className={styles["pre-sale-timer"]}>
            <h2 className={styles['pre-sale-heading']}>Pre-sale is Live Now</h2>
            <p>Pre-Sale ends in</p>
            <p>30 : 23 : 59 : 59</p>
            <p>D : H : M : S</p>
          </div>

          <div className={styles["status-card"]}></div>
      </div> */}
    </div>
  )
}

export default Header
