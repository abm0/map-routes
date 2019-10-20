import styled from 'styled-components';

export const AddressListContainer = styled.ul`
  margin: 0 10px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #e4e4e4;
  position: relative;
  padding-top: 10px;
  top: -10px;
  z-index: 2;
  max-height: 300px;
  overflow: auto;
  display: ${(props) => props.isVisible ? 'block' : 'none'};
`;
