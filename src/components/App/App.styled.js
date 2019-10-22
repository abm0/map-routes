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
  width: 0;

  @media screen and (max-width: 448px) {
    top: auto;
    bottom: 0;
    height: auto;
    display: block;
    width: 100%;
    padding-left: 0;
  }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 5;
`;