import React from 'react';
import styled from 'styled-components';
import store from 'store';
import { Provider } from 'react-redux';
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
`;

const App = () => (
  <Provider store={store}>
    <YMaps>
      <Wrapper>
        <Map />
        <Address />
        <PointsListWrapper>
          <PointsList />
        </PointsListWrapper>
      </Wrapper>
    </YMaps>
  </Provider>
);

export default App;
