import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';

import Map from '../Map';
import Address from '../Address';
import PointsList from '../PointsList';

import {
  Wrapper,
  PointsListWrapper,
} from './App.styled';

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
