import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Facebook(props) {
  return (
    <Svg
      width={15}
      height={26}
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.066 23.618h4.8V11.999h3.203l.424-4.003H7.866l.006-2.005c0-1.043.099-1.603 1.597-1.603h2.001V.383H8.267c-3.848 0-5.201 1.943-5.201 5.21v2.403H.667V12h2.399v11.617z"
        fill="#1777F2"
      />
    </Svg>
  );
}

export default Facebook;
