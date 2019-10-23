import { darken } from 'polished';

export default () => `
  border-radius: 3px;
  border: none;
  height: 24px;
  width: 24px;
  outline: none;
  transition: ease .3s background-color;
  background-color: #fff;
  padding: 0;

  &:hover {
    background-color: ${darken(0.05, '#fff')};
    cursor: pointer;
  }
`;
