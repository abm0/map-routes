import React, { Component } from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';

import Map from '../Map';
import Address from '../Address';
import PointsList from '../PointsList';
import Spinner from '../Spinner';

import {
  Wrapper,
  PointsListWrapper,
  LoadingOverlay,
} from './App.styled';

const YMAPS_API_KEY = '7547cd62-6ddd-4fe8-bbef-55ea5c7e70bf';

class App extends Component {
  state = { isMapLoaded: false }

  handleMapLoad = () => {
    this.setState({
      isMapLoaded: true,
    });
  }
  
  render() {
    const { isMapLoaded } = this.state;
    
    return (
      <>
        {!isMapLoaded && (
          <LoadingOverlay>
            <Spinner large />
          </LoadingOverlay>
        )}
        <Provider store={store}>
          <YMaps
            query={{
              ns: 'use-load-option',
              apikey: YMAPS_API_KEY,
              load: 'geocode',
            }}
          >
            <Wrapper>
              <Map onMapLoad={this.handleMapLoad} />
              {isMapLoaded && <Address />}
              <PointsListWrapper>
                <PointsList />
              </PointsListWrapper>
            </Wrapper>
          </YMaps>
        </Provider>
      </>
    );
  }
}

export default App;
