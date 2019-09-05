import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

  createElement() {
    this.mapEl = document.createElement('div');
    this.mapEl.id = 'map';
    document.querySelector('#root .wrapper').appendChild(this.mapEl);
  }

  removeElement() {
    document.body.removeChild(this.mapEl);
  }

  initMap() {
    const { ymaps } = window;
    
    ymaps.ready(() => {
      this.map = new ymaps.Map('map', this.mapOptions);
    });
  }

  createGeoObject(point) {
    const { ymaps } = window;
    
    const coordinates = [
      parseFloat(point.lng),
      parseFloat(point.lat),
    ];
    
    return {
      placemark: new ymaps.Placemark(coordinates),
      coordinates,
    };
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
    }, {
      boundsAutoApply: true,
    });

    this.map.geoObjects.add(route);
  }
  
  componentDidMount() {
    this.createElement();
    this.initMap();
  }

  componentWillUnmount() {
    this.removeElement();
  }
  
  componentWillReceiveProps(nextProps) {
    const { ids, pointsById } = nextProps;
    const orderedPoints = [];
    
    ids.forEach(id => {
      orderedPoints.push(pointsById[id]);
    });

    const geoobjects = orderedPoints.map(point => (
      this.createGeoObject(point)
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

export default connect(mapStateToProps, null)(Map);