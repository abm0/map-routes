const express = require('express');
const cors = require('cors');
const sa = require('superagent');
const app = express();

const YMAPS_API_KEY = '7547cd62-6ddd-4fe8-bbef-55ea5c7e70bf';
const YANDEX_API_URL = 'https://geocode-maps.yandex.ru/1.x/';

const getLatLng = (position) => {
  const coordsArr = position.split(' ');

  return {
    lat: coordsArr[0],
    lng: coordsArr[1],
  };
}

const getAddressData = (responseObj) => {
  const { featureMember } = responseObj.GeoObjectCollection;

  if (typeof featureMember === 'undefined' || !featureMember.length) {
    return {
      error: 'Empty geocoder response.',
    };
  }

  const { geoObject } = featureMember[0];

  const {
    lat,
    lng,
  } = getLatLng(geoObject.Point.pos);

  return {
    description: geoObject.description,
    name: geoObject.name,
    lat,
    lng,
  };
};

app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));

app.post('/addresses', (req, _res) => {
  sa.get(YANDEX_API_URL)
    .query({
      apikey: YMAPS_API_KEY,
      geocode: req.query.geocode,
      format: 'json',
    })
    .accept('json')
    .end((err, res) => {
      const addressData = getAddressData(res.body.response);

      _res.send(addressData);
    });
});

app.listen(4000, () => {
  console.log('Server is running!');
});