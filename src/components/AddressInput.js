import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import OutsideClickHandler from 'react-outside-click-handler';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.delayedAddressRequest = debounce(this.props.fetchAddressList, 1000);
  }
  
  handleInputChange = (e) => {
    this.delayedAddressRequest(e.target.value);
  }

  render() {
    const { onClickOutside } = this.props;

    return (
      <div className="address-input-block">
        <OutsideClickHandler
          onOutsideClick={onClickOutside}
        >
          <input
            type="text"
            placeholder="Search..."
            className="address-input-block__input"
            onChange={this.handleInputChange}
          />
        </OutsideClickHandler>
        <button className="address-input-block__list-toggle-button">
          <i className="icofont-rounded-down"></i>
        </button>
      </div>
    );
  }
}
 
export default AddressInput;