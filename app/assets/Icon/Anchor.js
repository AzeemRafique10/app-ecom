import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Anchor(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 8a3 3 0 100-6 3 3 0 000 6zM12 22V8M5 12H2a10 10 0 0020 0h-3"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Anchor
