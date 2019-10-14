import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import OutsideClickHandler from 'react-outside-click-handler';
import Spinner from './Spinner';
class AddressInput extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    fetchAddressList: PropTypes.func.isRequired,
    isAddressFetching: PropTypes.bool.isRequired,
  }
  
  constructor(props) {
    super(props);
    this.delayedAddressRequest = debounce(this.props.fetchAddressList, 1000);
  }
  
  handleInputChange = (e) => {
    this.delayedAddressRequest(e.target.value);
  }

  render() {
    const { 
      onClickOutside,
      isAddressFetching,
      onKeyDown,
    } = this.props;

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
            onKeyDown={onKeyDown}
          />
        </OutsideClickHandler>
        {isAddressFetching && (
          <Spinner />
        )}
      </div>
    );
  }
}
 
export default AddressInput;