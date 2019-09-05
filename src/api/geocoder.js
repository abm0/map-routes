import axios from 'axios';

export const fetchAddressList = (address) =>
  axios.post('http://localhost:4000/addresses', null, {
    params: {
      geocode: address,
    }
  });