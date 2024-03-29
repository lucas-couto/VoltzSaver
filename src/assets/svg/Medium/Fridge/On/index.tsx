import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const FridgeOn = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={69}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19.052 5.054H43c1.27 0 2.488.579 3.386 1.609.898 1.03 1.403 2.426 1.403 3.883V29.75H14.263V10.546c0-1.457.504-2.853 1.402-3.883.899-1.03 2.117-1.609 3.387-1.609Z"
      />
      <Path
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.91}
        d="M21.646 12.535v8.251"
      />
      <G
        filter="url(#b)"
        style={{
          mixBlendMode: "color-burn",
        }}
      >
        <Path fill="#FFF971" d="M13.898 29.677h34.385V65.29H13.898z" />
        <Path
          stroke="#000"
          strokeWidth={1.91}
          d="M14.853 30.632h32.475v33.703H14.853z"
        />
      </G>
      <Path stroke="#000" d="M14.627 42.29h33.526m-33.526 9.645h33.526" />
      <G stroke="#000" strokeMiterlimit={10} clipPath="url(#c)">
        <Path
          fill="red"
          d="M23.09 58.776c-.305 0-.605.072-.874.208a1.81 1.81 0 0 0-.665.571 1.834 1.834 0 0 0-.913-.678 1.96 1.96 0 0 0-1.164-.03 1.851 1.851 0 0 0-.952.63c-.237.3-.364.665-.362 1.039 0 2.597 3.39 3.476 3.39 3.476s3.392-.868 3.392-3.476c0-.462-.195-.904-.542-1.23a1.913 1.913 0 0 0-1.31-.51Z"
        />
        <Path
          fill="#00FF19"
          d="M19.289 56.202h1.133c.148 0 .295.027.432.08.137.054.261.132.366.23.105.099.188.216.245.345.057.128.086.266.086.406v.37h-1.13c-.15.001-.298-.027-.437-.08a1.136 1.136 0 0 1-.37-.235c-.106-.1-.189-.22-.245-.351a1.005 1.005 0 0 1-.08-.413v-.37.018ZM22.684 57.619h-1.13v-.371c0-.282.12-.551.332-.75.211-.2.498-.311.798-.311h1.129v.37c0 .282-.119.552-.33.751-.213.199-.5.31-.8.31Z"
        />
        <Path d="M21.55 59.388v-1.77" />
      </G>
      <G clipPath="url(#d)">
        <Path
          fill="#E7FFCE"
          stroke="#000"
          strokeMiterlimit={10}
          d="M42.832 37.312v-.153a1.79 1.79 0 0 0-.488-1.25 2.043 2.043 0 0 0-1.257-.627 2.07 2.07 0 0 0-.797.084c-.256.079-.492.207-.692.377-.2.17-.36.376-.47.606-.109.23-.166.48-.166.732 0 .498-.204.978-.572 1.34a1.957 1.957 0 0 0-.483.745c-.1.279-.131.575-.093.866.076.49.34.936.742 1.258.402.321.915.495 1.445.49h1.56c1.304 0 2.28-.734 2.408-1.748.04-.304.004-.613-.106-.903-.11-.289-.29-.55-.528-.763a1.474 1.474 0 0 1-.367-.479 1.387 1.387 0 0 1-.136-.575Z"
        />
        <Path stroke="#000" strokeMiterlimit={10} d="M40.897 34.3v.975" />
        <Path
          fill="#00FF19"
          d="M40.897 35.275h1.06c.458 0 .911.084 1.334.248.423.163.806.402 1.13.704.324.302.58.66.755 1.055.175.394.265.817.265 1.244h-1.06a3.57 3.57 0 0 1-1.017-.143"
        />
        <Path
          stroke="#000"
          strokeMiterlimit={10}
          d="M40.897 35.275h1.06c.458 0 .911.084 1.334.248.423.163.806.402 1.13.704.324.302.58.66.755 1.055.175.394.265.817.265 1.244h-1.06a3.57 3.57 0 0 1-1.017-.143"
        />
        <Path stroke="#000" d="m41.047 35.49 2.186 2.72" />
      </G>
      <G stroke="#000" strokeMiterlimit={10} clipPath="url(#e)">
        <Path
          fill="#FFFDD0"
          d="M27.746 39.823h-8.348v1.772h8.348v-1.772ZM27.746 38.052h-8.348v1.771h8.348v-1.771ZM19.86 36.262h7.886v1.771h-8.348v-1.307c0-.12.048-.234.134-.32a.496.496 0 0 1 .328-.144Z"
        />
        <Path
          fill="#fff"
          d="M19.398 34.514c-.492 0-.964.186-1.312.519a1.731 1.731 0 0 0-.544 1.252v5.31h1.856v-4.87a.455.455 0 0 1 .142-.305c.085-.08.2-.13.32-.135h7.886v-1.771h-8.348Z"
        />
        <Path
          fill="red"
          d="M22.183 33.452a1.044 1.044 0 0 1-.096.413c-.06.131-.147.249-.255.348a1.148 1.148 0 0 1-.374.227c-.139.052-.287.077-.437.074a1.184 1.184 0 0 1-.81-.301 1.086 1.086 0 0 1-.255-.348 1.044 1.044 0 0 1-.096-.413c0-.589.52-1.595 1.161-1.595.642 0 1.162 1.006 1.162 1.595Z"
        />
        <Path
          fill="red"
          d="M24.5 33.452c-.019.281-.15.544-.365.737-.215.193-.499.3-.794.3-.295 0-.579-.107-.794-.3a1.088 1.088 0 0 1-.364-.737c0-.589.515-1.595 1.156-1.595.641 0 1.161 1.006 1.161 1.595ZM26.818 33.452c-.02.281-.15.544-.365.737-.215.193-.5.3-.794.3-.295 0-.579-.107-.794-.3a1.089 1.089 0 0 1-.365-.737c0-.589.52-1.595 1.157-1.595.636 0 1.16 1.006 1.16 1.595Z"
        />
      </G>
      <G clipPath="url(#f)">
        <Path
          fill="#CFCFCF"
          stroke="#000"
          strokeMiterlimit={10}
          d="M33.469 51.379H29.31a.83.83 0 0 1-.543-.195.632.632 0 0 1-.227-.473v-.085l.425-5.279h4.864l.425 5.279v.085a.6.6 0 0 1-.061.26.677.677 0 0 1-.172.218.79.79 0 0 1-.255.144.87.87 0 0 1-.298.046Z"
        />
        <Path
          fill="#CFCFCF"
          stroke="#000"
          strokeMiterlimit={10}
          d="M30.17 43.926h2.44c.324 0 .634.112.863.312.229.2.357.47.357.753v.37h-4.88v-.37c0-.282.128-.553.357-.753.229-.2.54-.312.863-.312Z"
        />
        <Path
          fill="#CFCFCF"
          d="M34.085 48.894h.557a.88.88 0 0 0 .576-.208.67.67 0 0 0 .24-.501v-1.773a.67.67 0 0 0-.24-.502.881.881 0 0 0-.576-.207h-.786"
        />
        <Path
          stroke="#000"
          strokeMiterlimit={10}
          d="M34.085 48.894h.557a.88.88 0 0 0 .576-.208.67.67 0 0 0 .24-.501v-1.773a.67.67 0 0 0-.24-.502.881.881 0 0 0-.576-.207h-.786"
        />
        <Path fill="#CFCFCF" d="M28.95 45.347h-1.624v.356l1.415 2.564" />
        <Path
          stroke="#000"
          strokeMiterlimit={10}
          d="M28.95 45.347h-1.624v.356l1.415 2.564M31.39 43.218v.708"
        />
        <Path
          fill="#0075FF"
          stroke="#000"
          strokeMiterlimit={10}
          d="M31.394 46.768h-.004c-.449 0-.812.317-.812.709v1.776c0 .392.363.709.812.709h.004c.449 0 .812-.317.812-.709v-1.776c0-.392-.364-.71-.812-.71Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.78 0H62v69H.78z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M16.814 55.645h9.475v8.903h-9.475z" />
      </ClipPath>
      <ClipPath id="d">
        <Path fill="#fff" d="M37.22 34.129h8.746v8.161H37.22z" />
      </ClipPath>
      <ClipPath id="e">
        <Path fill="#fff" d="M16.814 31.161h11.66v11.13h-11.66z" />
      </ClipPath>
      <ClipPath id="f">
        <Path fill="#fff" d="M26.288 43.032h10.203v8.903H26.288z" />
      </ClipPath>
    </Defs>
  </Svg>
)

