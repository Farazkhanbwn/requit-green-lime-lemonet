import React from 'react'
import styles from './document-section.module.css'
import Image from 'next/image'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { CustomButtonTypes } from '@/shared/ui/custom-button/custom-button.types'
import ArrowDown from '@/shared/icons/arrow-down'

const DocumentSection = () => {
  return (
    <section className={styles['document__section']}>
      <div className={styles['wrapper']}>
        <div className={styles['document__image-container']}>
          <Image src="/assets/whitepaper.png" alt="Card" width={420} height={420} />
        </div>
        <div className={styles['document__content']}>
          <div className="wrapper-content">
            <h3 className={styles['document__title']}>Read Our Documents</h3>
            <p className={styles['document__description']}>
              Here is our full documents that help you to understand about us. And lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <div className={`${styles['button-group-container']} ${styles['mb']}`}>
              <CustomButton type={CustomButtonTypes.OUTLINE} className={styles['custom-button']}>
                White Paper{' '}
                <span className={styles['arrow-icon']}>
                  <ArrowDown />
                </span>
              </CustomButton>
              <CustomButton type={CustomButtonTypes.OUTLINE} className={styles['custom-button']}>
                One Pager{' '}
                <span className={styles['arrow-icon']}>
                  <ArrowDown />
                </span>
              </CustomButton>
            </div>

            <div className={styles['button-group-container']}>
              <CustomButton type={CustomButtonTypes.OUTLINE} className={styles['custom-button']}>
                Privacy & Policy
              </CustomButton>
              <CustomButton type={CustomButtonTypes.OUTLINE} className={styles['custom-button']}>
                Terms of Coin Sale
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocumentSection
