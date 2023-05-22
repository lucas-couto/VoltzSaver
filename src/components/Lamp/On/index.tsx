import * as React from "react"
import Svg, { Path, G, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const LampOn = (props: any) => (
  <Svg
    width={97}
    height={108}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M48.5 54c6.142 0 12.033 2.717 16.376 7.552 4.343 4.836 6.783 11.394 6.783 18.233v4.5H25.34v-4.5c0-6.839 2.44-13.397 6.783-18.233C36.467 56.717 42.358 54 48.5 54Z"
      fill="#fff"
      stroke="#000"
      strokeWidth={1.91}
      strokeMiterlimit={10}
    />
    <G
      style={{
        mixBlendMode: "multiply",
      }}
      filter="url(#a)"
    >
      <Path
        d="M59.372 84.06c.497 1.434.731 2.964.687 4.5 0 3.413-1.218 6.687-3.385 9.1-2.168 2.414-5.108 3.77-8.174 3.77s-6.006-1.356-8.174-3.77c-2.167-2.413-3.385-5.687-3.385-9.1-.044-1.536.19-3.066.687-4.5"
        fill="#FFF500"
      />
      <Path
        d="M59.372 84.06c.497 1.434.731 2.964.687 4.5 0 3.413-1.218 6.687-3.385 9.1-2.168 2.414-5.108 3.77-8.174 3.77s-6.006-1.356-8.174-3.77c-2.167-2.413-3.385-5.687-3.385-9.1-.044-1.536.19-3.066.687-4.5"
        stroke="#FFD600"
        strokeWidth={1.91}
        strokeMiterlimit={10}
      />
    </G>
    <Path
      d="m48 39 .5 14.992"
      stroke="#000"
      strokeWidth={1.91}
      strokeMiterlimit={10}
    />
    <Defs></Defs>
  </Svg>
)