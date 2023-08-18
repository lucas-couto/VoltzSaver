import * as React from "react"
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg"

export const ComputerOn = (props: any) => (
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
      d="M43.71 57.326H10.782c-2.022 0-3.66 1.072-3.66 2.395v11.965c0 1.323 1.638 2.395 3.66 2.395H43.71c2.022 0 3.661-1.072 3.661-2.395V59.72c0-1.322-1.639-2.395-3.66-2.395Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M19.924 69.303h14.644M14.443 65.716h3.66M21.765 65.716h3.66M29.067 65.716h3.66M36.389 65.716h3.66M14.443 62.117h3.66M21.765 62.117h3.66M29.067 62.117h3.66M36.389 62.117h3.66"
    />
    <G
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      clipPath="url(#a)"
    >
      <Path
        fill="#878787"
        d="M57.387 60.334h2.703c.717 0 1.405.302 1.912.841a2.97 2.97 0 0 1 .791 2.033v3.59c0 1.143-.427 2.24-1.187 3.048a3.936 3.936 0 0 1-2.867 1.263 3.937 3.937 0 0 1-2.868-1.263 4.454 4.454 0 0 1-1.188-3.049v-3.59c0-.761.285-1.493.792-2.032a2.624 2.624 0 0 1 1.912-.841Z"
      />
      <Path d="M58.739 62.493v2.152" />
    </G>
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="m18.332 50.087 2.151-10.619M11.922 50.087h29.94"
    />
    <Path
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="M46.143 3.34H7.642c-2.364 0-4.28 1.903-4.28 4.25v27.627c0 2.348 1.916 4.251 4.28 4.251h38.5c2.365 0 4.281-1.903 4.281-4.252V7.592c0-2.348-1.916-4.252-4.28-4.252Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.91}
      d="m35.296 50.087-2.129-10.619M3.362 30.965h47.061"
    />
    <Path
      fill="#5297FF"
      stroke="#000"
      d="M7.83 2.757h38.124a4.5 4.5 0 0 1 4.5 4.5v23.095H3.33V7.257a4.5 4.5 0 0 1 4.5-4.5Z"
    />
    <Path fill="#fff" d="M3.538 7.01a4 4 0 0 1 4-4h2.016v27.089H3.538V7.009Z" />
    <Path
      fill="#000"
      d="M45.292 3.01h.954a4 4 0 0 1 4 4v23.089h-4.954V3.009Z"
    />
    <Path fill="#001AFF" d="M39.631 3.01h6.015v27.089h-6.015z" />
    <Path fill="red" d="M33.615 3.01h6.015v27.089h-6.015z" />
    <Path fill="#FF00A8" d="M27.6 3.01h6.015v27.089H27.6z" />
    <Path fill="#52FF00" d="M21.585 3.01H27.6v27.089h-6.015z" />
    <Path fill="#00F0FF" d="M15.569 3.01h6.015v27.089h-6.015z" />
    <Path fill="#FAFF00" d="M9.483 3.01h6.015v27.089H9.483z" />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M50.246 54.178h16.985v18.06H50.246z" />
      </ClipPath>
    </Defs>
  </Svg>
)
