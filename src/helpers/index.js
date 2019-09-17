export const moveElement = (arr, oldIndex, newIndex) => {
  if (oldIndex > arr.length - 1 || newIndex > arr.length - 1) {
    console.log("Position exceeds array length");
    return arr;
  }

  const _arr = [...arr];

  const element = _arr.splice(oldIndex, 1);
  const leftArr = _arr.slice(0, newIndex);
  const rightArr = _arr.slice(newIndex);

  return [...leftArr, ...element, ...rightArr];
}

export const generateAddressId = () =>
  new Date().getUTCMilliseconds()