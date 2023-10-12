import React from 'react';
import { createPortal } from 'react-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';
import { normalAccentColor } from 'utils/variables.styled';

const loaderRoot = document.querySelector('#loader-root');

export function Loader() {
  return createPortal(
    <Backdrop>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color={normalAccentColor}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Backdrop>,
    loaderRoot
  );
}
