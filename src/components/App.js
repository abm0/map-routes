import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
import { YMaps, Map } from 'react-yandex-maps';

import Address from './Address';
import PointsList from './PointsList';

class App extends Component {
  handleYMapsLoad(map) {
    
  }
  
  render() { 
    return (
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
    );
  }
}
 
export default App;
