import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRight(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="#0ACF83"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowRight
