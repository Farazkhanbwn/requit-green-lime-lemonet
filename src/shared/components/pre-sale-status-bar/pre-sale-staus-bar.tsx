import React from 'react'
import styles from './pre-sale-status-bar.module.css'

const PreSaleStatusContainer = () => {
  return (
    <div className={styles['pre-sale__container']}>
      <div className={styles['pre-sale__timer']}>
        <h2 className={styles['pre-sale__heading']}>Pre-sale is Live Now</h2>
        <div>
          <h3 className={styles['countdown-heading']}>Pre-Sale ends in</h3>
          {/* CounDown List */}
          <div className={styles['countdown-container']}>
            {/* 1 */}
            <div className={styles['countdown-item']}>
              <div className={styles['countdown-number']}>30</div>
              <div>D</div>
            </div>
            <span className={styles['countdown-separator']}>:</span>
            {/* 2 */}
            <div className={styles['countdown-item']}>
              <div className={styles['countdown-number']}>23</div>
              <div>H</div>
            </div>
            <span className={styles['countdown-separator']}>:</span>
            {/* 3 */}
            <div className={styles['countdown-item']}>
              <div className={styles['countdown-number']}>59</div>
              <div>M</div>
            </div>
            <span className={styles['countdown-separator']}>:</span>
            {/* 4 */}
            <div className={styles['countdown-item']}>
              <div className={styles['countdown-number']}>59</div>
              <div>S</div>
            </div>
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
