import React from 'react';
import { ReactComponent as IconSVG } from 'assets/svg/spinner.svg';

import { SpinnerIcon } from './Spinner.styled';

const Spinner = ({ 
  large,
  color = 'dodgerblue',
}) => (
  <SpinnerIcon
    large={large}
    color={color}
    alt="spinner"
    >
    <IconSVG />
  </SpinnerIcon>
);

export default Spinner;