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
        <div className={styles['header__content']}>
          <h1 className={styles['header__title']}>The 1st Social Network where likes have value</h1>
          <p className={styles['header__description']}>
            LEMON provides a unique way for Users to create, post & profit from their content. Based on other users
            opinion. Your opinion matters
          </p>
          <div className={styles['header__buttons']}>
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
    </div>
  )
}

export default Header
