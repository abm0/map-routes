import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updatePointPosition } from 'store/actionCreators';

class Map extends Component {
  static propTypes = {
    pointsById: PropTypes.object.isRequired,
    ids: PropTypes.array.isRequired,
  }
  
  mapOptions = {
    center: [55.75, 37.57], 
    zoom: 9,
    controls: [],
  }

  createMapElement() {
    this.mapEl = document.createElement('div');
    this.mapEl.id = 'map';
    document.querySelector('#root .wrapper').appendChild(this.mapEl);
  }

  removeMapElement() {
    document.body.removeChild(this.mapEl);
  }

  initMap() {
    const { ymaps } = window;
    
    ymaps.ready(() => {
      this.map = new ymaps.Map('map', this.mapOptions);
    });
  }

  createGeoObject(point, index) {
    const { ymaps } = window;
    
    const coordinates = [
      parseFloat(point.lng),
      parseFloat(point.lat),
    ];

    const placemark = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates,
      },

      properties: {
        iconContent: index + 1,
        hintContent: point.name,
        balloonContentHeader: point.name,
        balloonContentBody: point.description,
      }
    }, {
      preset: 'twirl#redDotIcon',
      draggable: true,
      hintHideTimeout: 0,
    });

    placemark.events.add('dragend', this.onDragEnd.bind(this, point.id));
    
    return {
      placemark,
      coordinates,
    };
  }

  onDragEnd = (id, e) => {
    const { updatePointPosition } = this.props;
    const coordinates = e.originalEvent.target.geometry._coordinates;

    updatePointPosition(coordinates, id);
  }
  
  addGeoObjects(geoobjects) {
    if (!geoobjects.length) return;

    geoobjects.forEach(geoObject => {
      this.map.geoObjects.add(geoObject.placemark);
    });
  }

  addRoute(geoobjects) {
    const { ymaps } = window;
    const coordinates = geoobjects.map(geoobject => geoobject.coordinates);
    const route = new ymaps.multiRouter.MultiRoute({
      referencePoints: coordinates,
      params: {
        results: 1,
      }
    }, {
      boundsAutoApply: true,
      wayPointVisible: false,
    });

    this.map.geoObjects.add(route);
  }
  
  componentDidMount() {
    this.createMapElement();
    this.initMap();
  }

  componentWillUnmount() {
    this.removeMapElement();
  }
  
  componentWillReceiveProps(nextProps) {
    const { ids, pointsById } = nextProps;
    const orderedPoints = [];
    
    ids.forEach(id => {
      orderedPoints.push(pointsById[id]);
    });

    const geoobjects = orderedPoints.map((point, index) => (
      this.createGeoObject(point, index)
    ));

    this.map.geoObjects.removeAll();
    this.addGeoObjects(geoobjects);
    this.addRoute(geoobjects);
  }
    
  render = () => null
};

const mapStateToProps = (state) => ({
  pointsById: state.points.byId,
  ids: state.points.ids,
});

const mapActionCreators = {
  updatePointPosition,
};

export default connect(mapStateToProps, mapActionCreators)(Map);