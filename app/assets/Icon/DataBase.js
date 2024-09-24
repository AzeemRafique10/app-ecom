import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DataBase(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 8c4.97 0 9-1.343 9-3s-4.03-3-9-3-9 1.343-9 3 4.03 3 9 3zM21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DataBase;
