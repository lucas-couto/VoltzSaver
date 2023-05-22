import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const FridgeOn = (props: any) => (
  <Svg
    width={84}
    height={93}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M25.071 6.813H57.93c1.742 0 3.414.78 4.646 2.167 1.233 1.388 1.925 3.27 1.925 5.234v25.885h-46V14.214c0-1.963.692-3.846 1.925-5.234 1.232-1.388 2.904-2.168 4.646-2.168Z"
        fill="#fff"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M28.63 16.895v11.121"
        stroke="#000"
        strokeWidth={1.91}
        strokeMiterlimit={10}
      />
      <G
        style={{
          mixBlendMode: "color-burn",
        }}
        filter="url(#b)"
      >
        <Path fill="#FFF971" d="M18 40h47.18v48H18z" />
        <Path
          stroke="#000"
          strokeWidth={1.91}
          d="M18.955 40.955h45.27v46.09h-45.27z"
        />
      </G>
      <Path d="M19 57h46M19 70h46" stroke="#000" />
      <Path
        d="M30.613 79.22c-.42 0-.831.097-1.2.28a2.472 2.472 0 0 0-.913.77c-.3-.421-.74-.742-1.253-.914a2.735 2.735 0 0 0-1.597-.04 2.543 2.543 0 0 0-1.306.848c-.325.405-.499.897-.497 1.401 0 3.5 4.653 4.685 4.653 4.685s4.653-1.17 4.653-4.685c0-.622-.268-1.218-.744-1.658a2.652 2.652 0 0 0-1.796-.687Z"
        fill="red"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path
        d="M25.396 75.75h1.555c.203 0 .405.037.593.109.188.072.358.177.502.31.144.133.258.29.336.464.078.173.118.36.118.547v.5h-1.55c-.205 0-.41-.037-.6-.11a1.563 1.563 0 0 1-.508-.316 1.427 1.427 0 0 1-.335-.473 1.333 1.333 0 0 1-.11-.556v-.5.025ZM30.055 77.66h-1.55v-.5c0-.38.164-.743.454-1.011.29-.268.685-.419 1.096-.419h1.549v.5c0 .38-.163.743-.454 1.011-.29.268-.685.419-1.095.419Z"
        fill="#00FF19"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path d="M28.5 80.045V77.66" stroke="#000" strokeMiterlimit={10} />
      <G clipPath="url(#c)">
        <Path
          d="M57.7 50.29v-.206a2.39 2.39 0 0 0-.67-1.685 2.822 2.822 0 0 0-1.725-.845 2.887 2.887 0 0 0-1.093.113c-.352.107-.675.28-.95.508a2.458 2.458 0 0 0-.644.817c-.15.31-.228.647-.228.986a2.505 2.505 0 0 1-.785 1.806c-.3.286-.526.629-.663 1.005-.136.375-.18.774-.127 1.168.104.659.466 1.26 1.017 1.694a3.168 3.168 0 0 0 1.983.661h2.14c1.79 0 3.13-.99 3.305-2.355.055-.41.005-.828-.146-1.217a2.65 2.65 0 0 0-.724-1.03 1.993 1.993 0 0 1-.504-.645 1.843 1.843 0 0 1-.186-.775Z"
          fill="#E7FFCE"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <Path d="M55.045 46.23v1.315" stroke="#000" strokeMiterlimit={10} />
        <Path
          d="M55.045 47.545H56.5c.628 0 1.25.113 1.83.333.58.22 1.106.543 1.55.95.444.407.796.89 1.036 1.421.24.532.364 1.102.364 1.677h-1.455a4.983 4.983 0 0 1-1.395-.192"
          fill="#00FF19"
        />
        <Path
          d="M55.045 47.545H56.5c.628 0 1.25.113 1.83.333.58.22 1.106.543 1.55.95.444.407.796.89 1.036 1.421.24.532.364 1.102.364 1.677h-1.455a4.983 4.983 0 0 1-1.395-.192"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <Path d="m55.25 47.833 3 3.667" stroke="#000" />
      </G>
      <G clipPath="url(#d)" stroke="#000" strokeMiterlimit={10}>
        <Path
          d="M37 53.675H25.547v2.388H37v-2.388ZM37 51.288H25.547v2.387H37v-2.387ZM26.18 48.875H37v2.388H25.547V49.5c0-.16.065-.315.183-.431a.687.687 0 0 1 .45-.194Z"
          fill="#FFFDD0"
        />
        <Path
          d="M25.547 46.519c-.676 0-1.323.251-1.801.699A2.314 2.314 0 0 0 23 48.906v7.157h2.547V49.5a.607.607 0 0 1 .194-.411.687.687 0 0 1 .439-.183H37V46.52H25.547Z"
          fill="#fff"
        />
        <Path
          d="M29.367 45.087a1.385 1.385 0 0 1-.132.558 1.466 1.466 0 0 1-.349.468 1.577 1.577 0 0 1-.513.306c-.191.07-.395.104-.6.1a1.652 1.652 0 0 1-.6-.1 1.577 1.577 0 0 1-.513-.306 1.465 1.465 0 0 1-.349-.468 1.385 1.385 0 0 1-.131-.558c0-.793.713-2.15 1.593-2.15s1.594 1.357 1.594 2.15Z"
          fill="red"
        />
        <Path
          d="M32.547 45.087a1.458 1.458 0 0 1-.5.994c-.296.26-.686.404-1.09.404-.405 0-.795-.145-1.09-.404a1.457 1.457 0 0 1-.5-.994c0-.793.706-2.15 1.586-2.15.88 0 1.594 1.357 1.594 2.15Z"
          fill="red"
        />
        <Path
          d="M35.727 45.087a1.458 1.458 0 0 1-.5.994c-.296.26-.686.404-1.09.404-.405 0-.795-.145-1.09-.404a1.457 1.457 0 0 1-.5-.994c0-.793.713-2.15 1.586-2.15.874 0 1.594 1.357 1.594 2.15Z"
          fill="red"
        />
      </G>
      <G clipPath="url(#e)">
        <Path
          d="M44.852 69.25h-5.704c-.28 0-.547-.095-.745-.263a.846.846 0 0 1-.311-.637v-.115l.583-7.115h6.673l.584 7.115v.115c-.001.12-.03.239-.085.35a.914.914 0 0 1-.235.294c-.1.084-.22.15-.35.193-.13.044-.27.066-.41.063Z"
          fill="#CFCFCF"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <Path
          d="M40.326 59.205h3.348c.444 0 .87.151 1.184.42.314.27.49.634.49 1.015v.5h-6.696v-.5c0-.38.176-.746.49-1.015.314-.269.74-.42 1.184-.42Z"
          fill="#CFCFCF"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <Path
          d="M45.698 65.9h.764c.296 0 .58-.1.79-.28a.897.897 0 0 0 .33-.675v-2.39a.897.897 0 0 0-.33-.676 1.222 1.222 0 0 0-.79-.279h-1.079"
          fill="#CFCFCF"
        />
        <Path
          d="M45.698 65.9h.764c.296 0 .58-.1.79-.28a.897.897 0 0 0 .33-.675v-2.39a.897.897 0 0 0-.33-.676 1.222 1.222 0 0 0-.79-.279h-1.079"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <Path d="M38.652 61.12h-2.229v.48l1.943 3.455" fill="#CFCFCF" />
        <Path
          d="M38.652 61.12h-2.229v.48l1.943 3.455M42 58.25v.955"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <Path
          d="M42.006 63.035H42c-.615 0-1.114.428-1.114.955v2.395c0 .527.499.955 1.114.955h.006c.615 0 1.114-.428 1.114-.955V63.99c0-.527-.499-.955-1.114-.955Z"
          fill="#0075FF"
          stroke="#000"
          strokeMiterlimit={10}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h84v93H0z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" transform="translate(50 46)" d="M0 0h12v11H0z" />
      </ClipPath>
      <ClipPath id="d">
        <Path fill="#fff" transform="translate(22 42)" d="M0 0h16v15H0z" />
      </ClipPath>
      <ClipPath id="e">
        <Path fill="#fff" transform="translate(35 58)" d="M0 0h14v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

