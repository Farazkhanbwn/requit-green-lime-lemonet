import { PropsWithChildren } from 'react'

export enum CustomButtonTypes {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  WHITE = 'white',
}

export interface CustomButtonProps extends PropsWithChildren {
  type: CustomButtonTypes
  disable?: boolean
  onClick?: () => void
  className?: string
  hide?: boolean
}
