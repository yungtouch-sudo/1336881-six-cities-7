import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  border-color: red;
  position: fixed;
  top: 45%;
  left: 43%;
`;

function LoadingScreen() {
  return (
    <div className="sweet-loading">
      <ClipLoader color={'tomato'} css={override} size={150} />
    </div>
  );
}

export default LoadingScreen;
