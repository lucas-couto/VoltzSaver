import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const LampOn = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={70}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.91}
        d="M29.92 35c3.79 0 7.423 1.76 10.103 4.895 2.68 3.134 4.184 7.385 4.184 11.817v2.917H15.633v-2.916c0-4.433 1.506-8.684 4.185-11.818C22.498 36.761 26.131 35 29.92 35Z"
      />
      <G
        filter="url(#b)"
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <Path
          fill="#FFF500"
          d="M36.628 54.483c.306.93.45 1.921.423 2.917 0 2.212-.75 4.334-2.088 5.898-1.337 1.565-3.151 2.444-5.043 2.444-1.89 0-3.705-.88-5.042-2.444-1.337-1.564-2.089-3.686-2.089-5.898a8.578 8.578 0 0 1 .424-2.917"
        />
        <Path
          stroke="#FFD600"
          strokeMiterlimit={10}
          strokeWidth={1.91}
          d="M36.628 54.483c.306.93.45 1.921.423 2.917 0 2.212-.75 4.334-2.088 5.898-1.337 1.565-3.151 2.444-5.043 2.444-1.89 0-3.705-.88-5.042-2.444-1.337-1.564-2.089-3.686-2.089-5.898a8.578 8.578 0 0 1 .424-2.917"
        />
      </G>
      <Path
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.91}
        d="m29.612 25.278.308 9.717"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h59.841v70H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)