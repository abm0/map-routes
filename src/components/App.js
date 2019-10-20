import React from 'react';
import styled from 'styled-components';
// import store from 'store';
// import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';

import Map from './Map';
import Address from './Address';
import PointsList from './PointsList';

const Wrapper = styled.div`
  height: 100vh;
`;

const PointsListWrapper = styled.div`
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


const App = () => (
  <YMaps>
    <Wrapper>
      <Map />
      <Address />
      <PointsListWrapper>
        <PointsList />
      </PointsListWrapper>
    </Wrapper>
  </YMaps>
);

export default App;
