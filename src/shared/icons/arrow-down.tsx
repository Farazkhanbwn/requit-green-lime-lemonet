import React from 'react'
import { IconProps } from '../types/commons.types'

const ArrowDown: React.FC<IconProps> = ({ width = '13px', height = '7px' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="131 5 13 7"
    >
      <image
        width={width}
        height={height}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAHCAYAAADTcMcaAAAAAXNSR0IArs4c6QAAAFhJREFUKFON0FENgDAQg+G/EtACVtCAp1nBAl6QUHILEJYtG33ud5dUtmfg4F9OYFF0bQcKPEqStD1oAvYBzCCuZnR/68EXFKgDC1ChBqxAE33gKim1lrkAkKwiJ0L2AgUAAAAASUVORK5CYII="
        data-name=""
        transform="translate(131 5)"
      />
    </svg>
  )
}

export default ArrowDown
