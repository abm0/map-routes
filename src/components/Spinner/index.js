import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconSVG } from 'assets/svg/spinner.svg';

import { SpinnerIcon } from './Spinner.styled';

const Spinner = ({ 
  large,
  color,
}) => (
  <SpinnerIcon
    large={large}
    color={color}
    alt="spinner"
  >
    <IconSVG />
  </SpinnerIcon>
);

Spinner.propTypes = {
  large: PropTypes.bool,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  large: false,
  color: 'dodgerblue',
};

export default Spinner;