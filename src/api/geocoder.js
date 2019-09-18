import axios from 'axios';

export const fetchAddressList = (address) =>
  axios.post('http://localhost:4000/addresses', { geocode: address });