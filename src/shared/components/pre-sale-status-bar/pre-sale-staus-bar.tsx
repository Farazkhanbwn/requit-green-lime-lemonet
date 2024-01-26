import React from 'react'
import styles from './pre-sale-status-bar.module.css'
import PreSaleListTile from './pre-sale-list-tile/pre-sale-list-tile'

const PreSaleStatusContainer = () => {
  return (
    <div className={styles['pre-sale__container']}>
      <div className={styles['pre-sale__timer']}>
        <h2 className={styles['pre-sale__heading']}>Pre-sale is Live Now</h2>
        <div>
          <h3 className={styles['countdown-heading']}>Pre-Sale ends in</h3>

          <div className={styles['countdown-container']}>
            <PreSaleListTile count="30" text="D" />

            <span className={styles['countdown-separator']}>:</span>
            <PreSaleListTile count="23" text="H" />

            <span className={styles['countdown-separator']}>:</span>
            <PreSaleListTile count="59" text="M" />

            <span className={styles['countdown-separator']}>:</span>
            <PreSaleListTile count="30" text="S" />
          </div>
        </div>
      </div>

      <div className={styles['status-card']}>
        <h3 className={styles['status-card__title']}>Pre Sale</h3>
        <div className={styles['status-bar-container']}>
          <div className={styles['status-bar-fill']}></div>
        </div>
        <div className={styles['status-details']}>
          <span>Softcap reached</span>
          <span>124,000 Sold</span>
        </div>
      </div>
    </div>
  )
}

export default PreSaleStatusContainer
