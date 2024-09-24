import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function Google(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_662_807)">
        <Path
          d="M5.542 13.059l-.724 2.703-2.647.056a10.354 10.354 0 01-1.24-4.929c0-1.724.42-3.35 1.164-4.783l2.356.432L5.483 8.88a6.182 6.182 0 00-.333 2.01c0 .763.138 1.494.392 2.169z"
          fill="#FBBB00"
        />
        <Path
          d="M21.55 8.947a10.422 10.422 0 01-.046 4.114A10.399 10.399 0 0117.844 19l-2.968-.152-.42-2.622a6.198 6.198 0 002.667-3.165H11.56V8.947h9.989z"
          fill="#518EF8"
        />
        <Path
          d="M17.842 19a10.356 10.356 0 01-6.51 2.29c-3.96 0-7.404-2.214-9.16-5.472l3.37-2.759a6.184 6.184 0 008.913 3.167l3.387 2.773z"
          fill="#28B446"
        />
        <Path
          d="M17.97 2.884l-3.369 2.758A6.186 6.186 0 005.483 8.88L2.095 6.107A10.398 10.398 0 0111.332.489c2.523 0 4.837.9 6.638 2.395z"
          fill="#F14336"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_662_807">
          <Path
            fill="#fff"
            transform="translate(.932 .49)"
            d="M0 0H20.8V20.8H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Google;
