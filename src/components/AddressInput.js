import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import { requestAddressList } from 'api/maps';

class AddressInput extends Component {  
  state = {  }

  static propTypes = {
    updateAddressList: PropTypes.func,
  }
  
  constructor(props) {
    super(props);
    this.delayedAddressRequest = debounce(this.fetchAddress, 1000);
  }

  fetchAddress = async (value) => {
    try {
      const res = await requestAddressList(value);
      this.props.updateAddressList(res.data);
    } catch(e) {
      console.log(e);
      this.props.updateAddressList([]);
    }
  }
  
  handleInputChange = (e) => {
    this.delayedAddressRequest(e.target.value);
  }

  render() {
    return (
      <div className="address-input-block">
        <input
          type="text"
          placeholder="Search..."
          className="address-input-block__input"
          onChange={this.handleInputChange}
        />
        <button className="address-input-block__list-toggle-button">
          <i className="icofont-rounded-down"></i>
        </button>
      </div>
    );
  }
}
 
export default AddressInput;