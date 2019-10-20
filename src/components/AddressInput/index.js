import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import OutsideClickHandler from 'react-outside-click-handler';
import Spinner from '../Spinner';

import { AddressInputBlock, Input } from './AddressInput.styled';

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
      <AddressInputBlock>
        <OutsideClickHandler
          onOutsideClick={onClickOutside}
        >
          <Input
            data-e2e-id="address-input"
            type="text"
            placeholder="Search..."
            onChange={this.handleInputChange}
            onKeyDown={onKeyDown}
          />
        </OutsideClickHandler>
        {isAddressFetching && (
          <Spinner />
        )}
      </AddressInputBlock>
    );
  }
}
 
export default AddressInput;