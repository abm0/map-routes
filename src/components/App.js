import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';

import MapInterface from './MapInterface';
import Address from './Address';
import PointsList from './PointsList';

const App = () => {
  return (
    <Provider store={store}>
      <YMaps>
        <div className="wrapper">
          <MapInterface />
          <Address />
          <div className="points-list__wrapper">
            <PointsList />
          </div>
        </div>
      </YMaps>
    </Provider>
  );
};

export default App;
