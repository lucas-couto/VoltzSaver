import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"

export const ComputerOff = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={76}
    fill="none"
    {...props}
  >
    <Path
      fill="#878787"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M44.48 57.326H11.55c-2.022 0-3.66 1.072-3.66 2.395v11.965c0 1.323 1.638 2.395 3.66 2.395H44.48c2.021 0 3.66-1.072 3.66-2.395V59.72c0-1.322-1.639-2.395-3.66-2.395Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M20.694 69.303h14.643M15.212 65.716h3.66M22.534 65.716h3.66M29.836 65.716h3.661M37.158 65.716h3.66M15.212 62.117h3.66M22.534 62.117h3.66M29.836 62.117h3.661M37.158 62.117h3.66"
    />
    <G
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      clipPath="url(#a)"
    >
      <Path
        fill="#878787"
        d="M58.156 60.334h2.703c.717 0 1.405.302 1.912.841a2.97 2.97 0 0 1 .792 2.033v3.59c0 1.143-.428 2.24-1.188 3.048a3.937 3.937 0 0 1-2.867 1.263 3.937 3.937 0 0 1-2.868-1.263 4.454 4.454 0 0 1-1.187-3.049v-3.59c0-.761.284-1.493.791-2.032a2.624 2.624 0 0 1 1.912-.841Z"
      />
      <Path d="M59.508 62.493v2.152" />
    </G>
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="m19.1 50.087 2.152-10.619M12.691 50.087h29.94"
    />
    <Path
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M46.912 3.34h-38.5c-2.365 0-4.281 1.903-4.281 4.25v27.627c0 2.348 1.916 4.251 4.28 4.251h38.501c2.364 0 4.28-1.903 4.28-4.252V7.592c0-2.348-1.916-4.252-4.28-4.252Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="m36.065 50.087-2.129-10.619M4.13 30.965h47.062"
    />
    <Path
      fill="#000"
      stroke="#000"
      d="M8.6 2.757h38.123a4.5 4.5 0 0 1 4.5 4.5v23.095H4.1V7.257a4.5 4.5 0 0 1 4.5-4.5Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M51.015 54.178H68v18.06H51.015z" />
      </ClipPath>
    </Defs>
  </Svg>
)

