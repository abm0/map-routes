import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pointShape } from 'store/reducers/points';
import { 
  Map as YMap,
  Placemark,
  Polyline,
  withYMaps,
} from 'react-yandex-maps';

import { updatePointPosition } from 'store/actionCreators';

import {
  isPointAdded,
  getLastPointCoordinates,
} from 'helpers';

const mapConfig = {
  center: [55.75, 37.57], 
  zoom: 9,
  controls: [],
  points: {},
};

class Map extends React.Component {
  static propTypes = {
    pointsById: PropTypes.shape(pointShape),
    ids: PropTypes.arrayOf(PropTypes.number),
    onMapLoad: PropTypes.func.isRequired,
    updatePointPosition: PropTypes.func.isRequired,
    // eslint-disable-next-line
    ymaps: PropTypes.object,
  }

  static defaultProps = { 
    pointsById: {},
    ids: [],
  }
  
  state = {
    ...mapConfig,
    orderedPoints: [],
    ids: [],
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      ids, pointsById, 
    } = nextProps;
    const orderedPoints = [];
    
    ids.forEach(id => {
      orderedPoints.push(pointsById[id]);
    });

    const newState = {
      orderedPoints,
      ids,
    };

    if (isPointAdded(prevState.ids, nextProps.ids)) {
      newState.center = getLastPointCoordinates(orderedPoints);
    }

    return newState;
  }
  
  onDragEnd = async (e, id) => {
    const {
      updatePointPosition,
      ymaps,
    } = this.props;
    // eslint-disable-next-line
    const coordinates = e.originalEvent.target.geometry._coordinates;

    updatePointPosition(id, coordinates, ymaps.geocode);
  }

  getPolylineGeometry() {
    const { orderedPoints } = this.state;
    
    return orderedPoints.map(point => (
      [
        point.lng,
        point.lat,
      ]
    ));
  }

  renderPlacemark(point, index) {
    const coordinates = [
      parseFloat(point.lng),
      parseFloat(point.lat),
    ];

    const placeMark = {
      geometry: {
        type: "Point",
        coordinates,
      },
      properties: {
        iconContent: index + 1,
        hintContent: point.name,
        balloonContentHeader: point.name,
        balloonContentBody: point.description,
      },
      options: {
        preset: 'twirl#redDotIcon',
        draggable: true,
        hintHideTimeout: 0,
      },
      modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
    };
    
    return (
      <Placemark
        key={point.id}
        onDragEnd={(e) => this.onDragEnd(e, point.id)}
        {...placeMark}
      />
    );
  }
  
  render() {
    const { onMapLoad } = this.props;

    const { orderedPoints } = this.state;

    return (
      <YMap
        state={this.state}
        defaultState={this.state}
        width="100%"
        height="100%"
        onLoad={onMapLoad}
        onError={(error) => console.log(error)}
      >
        {orderedPoints.map((point, index) => (
          this.renderPlacemark(point, index)
        ))}
        <Polyline geometry={this.getPolylineGeometry(orderedPoints)} />
      </YMap>
    );
  }
};

const mapStateToProps = (state) => ({
  pointsById: state.points.byId,
  ids: state.points.ids,
});

const mapActionCreators = { updatePointPosition };

export default connect(mapStateToProps, mapActionCreators)(withYMaps(Map));