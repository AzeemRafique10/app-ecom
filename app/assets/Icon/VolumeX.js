import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function VolumeX(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default VolumeX;
