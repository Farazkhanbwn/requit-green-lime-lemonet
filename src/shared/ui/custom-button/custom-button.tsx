import { FC } from 'react'
import styles from './custom-button.module.css'
import { CustomButtonProps } from './custom-button.types'

const CustomButton: FC<CustomButtonProps> = ({ type, disable = false, onClick, className, children, hide = false }) => {
  if (hide) {
    return null
  }
  return (
    <button className={`${styles['button']} ${styles[type]} ${className}`} disabled={disable} onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton
