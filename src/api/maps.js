import axios from 'axios';

export const requestAddressList = (address) => 
  axios.post('http://localhost:4000/addresses', {
    geocode: address,
  });