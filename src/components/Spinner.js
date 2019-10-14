import React from 'react';
import styled from 'styled-components';

const SpinnerIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Spinner = () => (
  <SpinnerIcon src={require('assets/svg/spinner.svg')} alt="spinner" />
);

export default Spinner;