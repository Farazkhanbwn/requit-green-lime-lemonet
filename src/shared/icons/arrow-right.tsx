import React from 'react'
import { IconProps } from '../types/commons.types'

const ArrowRight: React.FC<IconProps> = ({ width = '15', height = '9' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height}>
      <image
        width={width}
        height={height}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAKxJREFUKFONkVENAjEQRN8oAAnnACQcDpDAOcACDnBw4AAHIAEHIAEHC3N0L00TEr6aTOd1d6YCiIjep6Sbz6J1QC/plNrkKeZrEQcbImIJPIEFcJa0S6gFrA/ApQKszZDKeL8wVqMN3T8reUVPmaEJ+AFtgFcDHWpg3VwayCmr8u4XiIjWnDm8UpqnHA79tzlrrQNnrf6DRx12rrWstHeNklxnlrAFOknH+uPe67lOBf40a3IAAAAASUVORK5CYII="
        data-name=""
      />
    </svg>
  )
}

export default ArrowRight
