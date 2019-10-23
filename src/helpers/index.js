export const moveElement = (arr, oldIndex, newIndex) => {
  if (oldIndex > arr.length - 1 || newIndex > arr.length - 1) {
    console.log("Position exceeds array length");
    return arr;
  }

  const arrCopy = [...arr];

  const element = arrCopy.splice(oldIndex, 1);
  const leftArr = arrCopy.slice(0, newIndex);
  const rightArr = arrCopy.slice(newIndex);

  return [...leftArr, ...element, ...rightArr];
}

export const generateAddressId = () =>
  new Date().getUTCMilliseconds()

export const isPointAdded = (prevIds, nextIds) => {
  return nextIds.length > prevIds.length;
};

export const getLastPointCoordinates = (orderedPoints) => {
  const lastPoint = orderedPoints[orderedPoints.length - 1];

  return [
    lastPoint.lng,
    lastPoint.lat,
  ];
};

export const formatGeocoderResponse = (geoObjects) => {
  const geoObjectsArr = geoObjects.toArray();

  const formattedData = geoObjectsArr.map((geoObject) => {
    const [lng, lat] = 
      geoObject.geometry
        .getCoordinates()
        .map(value => value.toString());
      
    const name = geoObject.properties.get('name');
    const description = geoObject.properties.get('text');

    return {
      lat,
      lng,
      name,
      description,
    };
  });
  
  return formattedData;
};