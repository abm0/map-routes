import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map as YMap, Placemark } from 'react-yandex-maps';

class Map extends Component {
  state = {
    center: [55.75, 37.57], 
    zoom: 9,
    points: [],
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      points: Object.values(nextProps.pointsById),
    });
  }
  
  handleMapLoad = () => {}

  renderPlacemarks(points) {
    if (!points.length) return null;

    const pointsArr = points.map((point, index) => {
      const coordinates = [
        parseFloat(point.lng),
        parseFloat(point.lat),
      ];
      
      return (
        <Placemark key={index} geometry={coordinates} />
      );
    });

    return pointsArr;
  }
  
  render() {
    const { points, ...restState } = this.state;

    return (
      <YMap
        className="map"
        defaultState={restState}
        onLoad={this.handleYMapsLoad}
      >
        {this.renderPlacemarks(points)}
      </YMap>
    );
  }
};

const mapStateToProps = (state) => ({
  pointsById: state.points.byId,
});

export default connect(mapStateToProps, null)(Map);