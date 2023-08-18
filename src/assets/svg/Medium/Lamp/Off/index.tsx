import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const LampOff = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={70}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M30.08 35c3.789 0 7.423 1.76 10.102 4.895 2.68 3.134 4.185 7.385 4.185 11.817v2.917H15.793v-2.916c0-4.433 1.505-8.684 4.184-11.818C22.657 36.761 26.29 35 30.08 35Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M36.787 54.483a8.58 8.58 0 0 1 .424 2.917c0 2.212-.752 4.334-2.089 5.898-1.337 1.565-3.151 2.444-5.042 2.444-1.892 0-3.705-.88-5.043-2.444-1.337-1.564-2.088-3.686-2.088-5.898a8.578 8.578 0 0 1 .423-2.917M29.925 25.275v9.722"
    />
  </Svg>
)

