import styled from 'styled-components';

export const AddressBlock = styled.div `
  z-index: 2;
  position: fixed;
  top: 20px;
  left: 20px;

  @media screen and (max-width: 448px) {
    top: 0;
    left: 0;
    width: 100%;
  }
`;
