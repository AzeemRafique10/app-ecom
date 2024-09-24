import * as React from 'react';
import Svg, {Rect, Mask, G, Path} from 'react-native-svg';

function AudioLogo(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.833328}
        y={0.380951}
        width={20.2381}
        height={20.2381}
        rx={5.95238}
        fill="#0ACF83"
      />
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={22}
        height={21}>
        <Rect
          x={0.833328}
          y={0.380981}
          width={20.2381}
          height={20.2381}
          rx={5.95238}
          fill="#0ACF83"
        />
      </Mask>
      <G mask="url(#a)" fill="#fff">
        <Path d="M13.902 10.018a2.766 2.766 0 01-1.958 3.387 2.766 2.766 0 01-3.39-1.954 2.766 2.766 0 011.959-3.387 2.766 2.766 0 013.39 1.954z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.603 1.898a.958.958 0 000 1.356l4.706 4.701a6.503 6.503 0 00-.4 4.473 6.539 6.539 0 008.01 4.618 6.539 6.539 0 004.63-8.005 6.539 6.539 0 00-8.012-4.618 6.567 6.567 0 00-1.475.593L3.45.41a.961.961 0 00-1.358 0L.602 1.898zm11.601 12.478a3.772 3.772 0 002.67-4.618 3.772 3.772 0 00-4.621-2.664 3.772 3.772 0 00-2.67 4.618 3.772 3.772 0 004.621 2.664z"
        />
      </G>
    </Svg>
  );
}

export default AudioLogo;
