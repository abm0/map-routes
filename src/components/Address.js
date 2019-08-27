import React, { Component } from 'react';
import AddressInput from './AddressInput';
import AddressList from './AddressList';

class Address extends Component {
  state = {
    addresses: [],
  }

  updateAddressList = (addresses = []) => {
    this.setState({ addresses });
  }
  
  render() { 
    const { addresses } = this.state;

    return (
      <div className="address-block">
        <AddressInput
          updateAddressList={this.updateAddressList}
        />
        <AddressList
          addresses={addresses}
        />
      </div>
    );
  }
}
 
export default Address;