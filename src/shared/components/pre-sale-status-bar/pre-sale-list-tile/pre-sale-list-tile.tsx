import React, { FC } from 'react'
import styles from './pre-sale-list-tile.module.css'

interface ListTileProps {
  count: string
  text: string
}

const PreSaleListTile: FC<ListTileProps> = ({ count, text }) => {
  return (
    <div className={styles['countdown']}>
      <div className={styles['countdown-item']}>{count}</div>
      <div>{text}</div>
    </div>
  )
}

export default PreSaleListTile
