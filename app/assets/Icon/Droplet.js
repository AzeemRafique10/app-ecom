import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Droplet(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Droplet;
