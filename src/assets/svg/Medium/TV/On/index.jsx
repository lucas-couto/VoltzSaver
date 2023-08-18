import * as React from "react"
import Svg, { Path, ClipPath, G, Defs } from "react-native-svg"

export const TVOn = (props) => (
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
        d="M107.296 70.873H11.96c-3.17-.003-6.21-1.187-8.453-3.29C1.265 65.477.004 62.625 0 59.65V11.223c.004-2.975 1.265-5.828 3.507-7.932C5.75 1.187 8.79.004 11.96 0h95.336c3.171.004 6.211 1.187 8.453 3.291 2.242 2.104 3.503 4.957 3.507 7.932V59.65c-.004 2.976-1.265 5.828-3.507 7.932s-5.282 3.288-8.453 3.291ZM27.826 78.334H91.43Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3.012}
        d="M27.826 78.334H91.43"
      />
      <Path
        fill="#fff"
        d="M4.147 14.108c0-5.522 4.477-10 10-10h4.312v63.27h-4.312c-5.523 0-10-4.477-10-10v-43.27Z"
      />
      <Path
        fill="#000"
        d="M103.49 4.108h1.787c5.523 0 10 4.478 10 10v43.27c0 5.523-4.477 10-10 10h-1.787V4.108Z"
      />
      <Path fill="#001AFF" d="M90.02 4.108h14.312v63.269H90.02z" />
      <Path fill="red" d="M75.708 4.108H90.02v63.269H75.708z" />
      <Path fill="#FF00A8" d="M61.396 4.108h14.312v63.269H61.396z" />
      <Path fill="#52FF00" d="M47.083 4.108h14.312v63.269H47.083z" />
      <Path fill="#00F0FF" d="M32.771 4.108h14.312v63.269H32.771z" />
      <Path fill="#FAFF00" d="M18.291 4.108h14.312v63.269H18.291z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h119.256v78.334H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
