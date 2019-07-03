import React, { Component } from 'react';
import AddressInput from './AddressInput';
import AddressList from './AddressList';

class Address extends Component {
  state = {  }
  render() { 
    return (
      <div className="address-block">
        <AddressInput />
        <AddressList />
      </div>
    );
  }
}
 
export default Address;