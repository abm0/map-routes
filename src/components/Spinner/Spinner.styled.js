import styled from 'styled-components';

const regularSide = '20px';
const largeSide = '100px';

export const SpinnerIcon = styled.i`
  display: block;
  width: ${(props) => props.large ? largeSide : regularSide};
  height: ${(props) => props.large ? largeSide : regularSide};

  svg {
    stroke: ${(props) => props.color};
    width: 100%;
    height: 100%;
  }
`;
