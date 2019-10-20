import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const PointsListWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media screen and (max-width: 448px) {
    top: auto;
    bottom: 0;
    height: auto;
    display: block;
    width: 100%;
    padding-left: 0;
  }
`;
