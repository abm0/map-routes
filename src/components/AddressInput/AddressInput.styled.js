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
  transition: ease 0.3s box-shadow;
  align-items: center;

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

export const EnterButtonIcon = styled.span`
  position: relative;
  display: block;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  width: 25px;
  height: 20px;

  &:before,
  &:after {
    content: '';
    position: absolute;
  }

  &:before {
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 3px solid #555;
    left: 6px;
    top: 9px;
    position: absolute;
  }

  &:after {
    width: 8px;
    height: 8px;
    border-right: 1px solid #555;
    border-bottom: 1px solid #555;
    top: 4px;
    left: 9px;
    border-bottom-right-radius: 2px;
  }
`;

export default {
  AddressInputBlock,
  Input,
  EnterButtonIcon, 
};  