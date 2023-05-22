import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const TVOn = (props) => (
  <Svg
    width={144}
    height={97}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M129.377 86.254H14.422c-3.824-.004-7.49-1.445-10.193-4.005C1.526 79.689.005 76.217 0 72.596V13.659c.005-3.621 1.526-7.093 4.23-9.653C6.932 1.445 10.597.005 14.421 0h114.955c3.823.005 7.488 1.445 10.192 4.006 2.704 2.56 4.225 6.032 4.229 9.653v58.937c-.004 3.62-1.525 7.092-4.229 9.653-2.704 2.56-6.369 4-10.192 4.005ZM33.553 95.334h76.692Z"
      fill="#000"
    />
    <Path
      d="M33.553 95.334h76.692"
      stroke="#000"
      strokeWidth={3.012}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M5 15C5 9.477 9.477 5 15 5h7.258v77H15C9.477 82 5 77.523 5 72V15Z"
      fill="#fff"
    />
    <Path
      d="M124.788 5H129c5.523 0 10 4.477 10 10v57c0 5.523-4.477 10-10 10h-4.212V5Z"
      fill="#000"
    />
    <Path fill="#001AFF" d="M108.545 5h17.258v77h-17.258z" />
    <Path fill="red" d="M91.288 5h17.258v77H91.288z" />
    <Path fill="#FF00A8" d="M74.03 5h17.258v77H74.03z" />
    <Path fill="#52FF00" d="M56.773 5h17.258v77H56.773z" />
    <Path fill="#00F0FF" d="M39.515 5h17.258v77H39.515z" />
    <Path fill="#FAFF00" d="M22.055 5h17.258v77H22.055z" />
  </Svg>
)
