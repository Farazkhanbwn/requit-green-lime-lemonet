import React from 'react'
import { IconProps } from '../types/commons.types'

const PlayButton: React.FC<IconProps> = ({ width = '65px', height = '65.001px' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="926 1546 65 65.001">
      <g data-name="play-btn">
        <path
          d="M958.5 1546c17.95 0 32.5 14.55 32.5 32.5s-14.55 32.5-32.5 32.5-32.5-14.55-32.5-32.5 14.55-32.5 32.5-32.5Z"
          fill="rgba(255, 255, 255, 1)"
          fill-rule="evenodd"
          data-name="bg"
        />
        <path
          d="M947.212 1594.552c.215.3.557.458.905.458.22 0 .442-.063.635-.196l21.77-14.935c.294-.201.47-.53.47-.88 0-.353-.176-.68-.47-.884l-21.77-14.934a1.131 1.131 0 0 0-1.146-.074 1.075 1.075 0 0 0-.596.957v20.416c0 .596.496 1.078 1.106 1.078.61 0 1.106-.482 1.106-1.078v-18.338l18.74 12.856-20.483 14.051a1.062 1.062 0 0 0-.267 1.503Z"
          fill="rgba(102, 187, 76, 1)"
          fill-rule="evenodd"
          data-name="icon"
        />
      </g>
    </svg>
  )
}

export default PlayButton
