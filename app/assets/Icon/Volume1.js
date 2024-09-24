import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Volume1(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Volume1;
