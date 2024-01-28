import React from 'react'
import { IconProps } from '../types/commons.types'

const LogoIcon: React.FC<IconProps> = ({ width = '200px', height = '39px' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 200 39"
    >
      <g data-name="logo">
        <image
          width="147"
          height="26"
          xlinkHref="data:image/png;base64,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"
          data-name="LEMONET"
          transform="translate(53 7)"
        />
        <image
          width="35"
          height="39"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAYAAACFSPFPAAAAAXNSR0IArs4c6QAABYNJREFUWEfFmAmolVUUhb/VPGKl0UBW2pw0zyBBURYJUZBN0kgTDWrZnJk2SaNZ0ECJlgVFUkQRWZAN0mDSYLNlWhbNc0Gju7Me53/9775773/vfUYHHu8O599nnb3X3nvtK/qwImIb4D5gJ+A1YKSkdzs1qU4f9HMR8Qqwa8nGPEm7dWqzYzARMQhYCJRtLAX6S/qhE0Btg4mINYGLgbOBlesc+g0wHrhT0l/tgGoZTEQsBxwPXA2sl70yCTgE2AOYm//GAGsDbwHnSHqqVUAtgYmIvYGbMlF/Aq5MB06R9EfmzjBJT+bX66T/E4DTgeWBR4FzJS2oAtUUTObFtemWhyXXmw93AZdK+qpsOCIWS9q05jNn2o3AgcCfwM0J3BWSfmwEqi6YiFgDuMhuBlYBZgNjJM2vZ6gemGJfRBwETAa2BL72ZXwpSX/X2lJEOP5TgB0Ap6pjb4JuACzKLn6omYubgcmhWzEBOSNVg8tSuNcC3swkPxTYHXgDGG0wTwP71Bz2M3CVeSLp9wogQ4AnfBlJ31Xs7Q9cDpya+VTePttgosaA4ztQ0pcVhk1UGx6W+ODXvwI3ALdWpXRE+AKvp0RYoXyGwbyf41l8/ikwQtJLDfhhA84U8+m2nGW2sWdOe1dgZ8+sRpeJCO99MHFno9KeBQbjGuFa4GL2cb7tWcA76bbnpVh+DwyQtCQi9s+HvwCMK7xX5kxE7Jz3ONQG/AGwMbAk16frgG1Tpb4llwhz89vE1+Fd2RQRJvAoYLCkRbnAnZQB+QbrAzYyx0YluSl2rwapPQJYDTgW2DcnxnGAa5azaWlEmMBOjhMlTSvAuKCNBgZJWlxKSxu6O7//XNKG7aR2RHj/Z6Vnhkiyx7tWRLh6P5wickKqU9OrwAzMN+ryjKTz2wTjFmIKFJ4ZKskJ0j6YjH5VZ4uk8g17YIqI8ZKcWb1WDrk9ZM/2KHRteSaD2Q64UNLIBodtBRwAzJLkrKoHaL6k7Wu/6ATMjsnIBEmOb61H3Dacga4zLnibSPqlzr5evattzuQHmoFxnXDKFsvF0nWqFvR/ByYiBgPX5GZ6OHAkcH9uhA6rPdndGhr1rj6FKau8ca7QPhCYIam7nUSEO7wV4Gnl1rCswUxMwuqR3P5n2CuS3IvqrohwKbAidHV3Fb6jVu90yhl7wcLoObcHSZ80AlGHK24Nt+c2YDXYI9taDlNJ5XkKeDGnr1O8qbYpAJUEmvl0L3BU0i6Pp2lioiT3u4YVeKr7g90qaW5EOCzH5KZ5T+4jbvuWkZ4IRjVRfa66biNWdCb1JKd7RLh4OmSnAGMlzezVmyLiaBMxHWwjFtgOi//PaVAzhuem+XzStpekjLL4KibKra1nEpiPgAvKfa7kMVdjTw8+zzLj364dEdalA0rxXihp82a8iIhCRj6W1b9BvJea4sk+RJL51XRFxMtZchb7uvSMG1dZcTlL+tUTzHUIaj7ZC8XqkiAtAHHl9rDXYwg0mGl5OCvbsGD2NGB93HAlbrnrP5BHmZnAEeW6Uwd8wSenvcNTXl0aeKWktKzsPB287f6SSeYBzLXFEvLDClAGYVDNgA/NCnCXRGCrQI8vm6Uw+72ngzGN5qYicyy2HUYrQQ9gniZ7rYq5ycOdW4fbhqu1M7dbspaNVU2UzhzfYIskwj1FuhVMdaqXjTSQnavn3jU2D4LP5tB7Kqi7KmftHMYz89DVr9ul0jOFxRpBbpuuUf5RwGlsGevKbU41XZVgSgeum4ug09d8sna9Pt9+r1ylHQJPox5XrGtM1MmSfqsC4u9bBlMCZYngSrxf5kCtDfNiukFJ+qIVEMWetsGUQB2cs60HffyzmqRX2wHRZzA2EBHzcmoW9v6f3/QymGX6a+c/0Maw8cCYf7UAAAAASUVORK5CYII="
          data-name="logo-symbol"
        />
      </g>
    </svg>
  )
}

export default LogoIcon
