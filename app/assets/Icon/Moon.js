import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Moon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Moon;
