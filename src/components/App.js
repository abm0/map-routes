import React, { Component } from 'react';
import createStore from 'store';
import { Provider } from 'react-redux';
import { YMaps, Map } from 'react-yandex-maps';

import Address from './Address';
import PointsList from './PointsList';

const store = createStore();

class App extends Component {
  handleYMapsLoad(map) {
    
  }
  
  render() { 
    return (
      <Provider store={store}>
        <YMaps>
          <div className="wrapper">
            <Map 
              className="map"
              defaultState={{ center: [55.75, 37.57], zoom: 9 }} 
              onLoad={this.handleYMapsLoad}
            />
            <Address />
            <PointsList />
          </div>
        </YMaps>
      </Provider>
    );
  }
}
 
export default App;
