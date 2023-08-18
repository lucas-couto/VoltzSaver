import * as React from "react"
import Svg, { Path, ClipPath, G, Defs } from "react-native-svg"

export const TVOff = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={79}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M108.04 70.873H12.704c-3.17-.003-6.21-1.187-8.453-3.29C2.01 65.477.748 62.625.744 59.65V11.223C.748 8.248 2.009 5.395 4.25 3.291S9.533.004 12.704 0h95.336c3.17.004 6.21 1.187 8.453 3.291 2.242 2.104 3.503 4.957 3.507 7.932V59.65c-.004 2.976-1.265 5.828-3.507 7.932-2.243 2.104-5.283 3.288-8.453 3.291ZM28.57 78.334h63.604Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3.012}
        d="M28.57 78.334h63.604"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.744 0H120v78.334H.744z" />
      </ClipPath>
    </Defs>
  </Svg>
)