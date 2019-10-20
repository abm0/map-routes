import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  YMaps, 
  Map as YMap,
  Placemark,
  Polyline,
} from 'react-yandex-maps';

// import { updatePointPosition } from 'store/actionCreators';
import {
  isPointAdded,
  getLastPointCoordinates,
} from 'helpers';

class Map extends React.Component {
  static propTypes = {
    pointsById: PropTypes.object.isRequired,
    ids: PropTypes.array.isRequired,
  }

  static defaultProps = {
    pointsById: {},
    ids: [],
  }
  
  state = {
    center: [55.75, 37.57], 
    zoom: 9,
    controls: [],
    points: {},
    orderedPoints: [],
    ids: [],
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { ids, pointsById } = nextProps;
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

  isPointAdded(prevIds, nextIds) {
    return nextIds.length > prevIds.length;
  }

  getLastPointCoordinates(orderedPoints) {
    const lastPoint = orderedPoints[orderedPoints.length - 1];

    return [
      lastPoint.lng,
      lastPoint.lat
    ];
  }
  
  // TODO: implement updating name on drag end
  onDragEnd = (id, e) => {
    const { updatePointPosition } = this.props;
    const coordinates = e.originalEvent.target.geometry._coordinates;

    updatePointPosition(coordinates, id);
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
      modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
    };
    
    return (
      <Placemark
        key={point.id}
        onDragEnd={this.onDragEnd.bind(this, point.id)}
        {...placeMark}
      />
    );
  }

  getPolylineGeometry(points) {
    return points.map(point => (
      [
        point.lng,
        point.lat
      ]
    ));
  }
  
  render() {
    const {
      orderedPoints
    } = this.state;
    
    return (
      <YMaps>
        <YMap state={this.state} defaultState={this.state} width={'100%'} height={'100%'}>
          {orderedPoints.map((point, index) => (
            this.renderPlacemark(point, index)
          ))}
          <Polyline geometry={this.getPolylineGeometry(orderedPoints)} />
        </YMap>
      </YMaps>
    );
  }
};

// const mapStateToProps = (state) => ({
//   pointsById: state.points.byId,
//   ids: state.points.ids,
// });

// const mapActionCreators = {
//   updatePointPosition,
// };

// export default connect(mapStateToProps, mapActionCreators)(Map);
export default Map;