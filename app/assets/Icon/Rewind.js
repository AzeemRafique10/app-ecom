import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Rewind(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Rewind;
