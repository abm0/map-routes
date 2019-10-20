import styled from 'styled-components';

export const AddressInputBlock = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  border: 1px solid #e4e4e4;
  width: 392px;
  display: flex;
  flex-direction: row;
  z-index: 3;
  position: relative;
  box-shadow: none;
  transition: ease .3s box-shadow;

  @media screen and (max-width: 448px) {
    width: 100%;
    border-radius: 0;
  }

  > div {
    flex-grow: 1;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
  border-radius: 3px;
  border: none;
  height: 24px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;
