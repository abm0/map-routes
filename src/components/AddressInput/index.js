import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withYMaps } from 'react-yandex-maps';
import debounce from 'lodash/debounce';
import OutsideClickHandler from 'react-outside-click-handler';
import { formatGeocoderResponse } from 'helpers';

import Spinner from '../Spinner';

import {
  AddressInputBlock,
  Input,
  EnterButtonIcon,
} from './AddressInput.styled';

class AddressInput extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    fetchAddressList: PropTypes.func.isRequired,
    fetchAddressListSuccess: PropTypes.func.isRequired,
    isAddressFetching: PropTypes.bool.isRequired,
    isAddressListVisible: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  state = { value: '' }
  
  constructor(props) {
    super(props);
    this.debouncedFetchAddressList = debounce(this.fetchAddressList, 500);
  }

  fetchAddressList = async value => {
    const {
      fetchAddressList, 
      fetchAddressListSuccess, 
    } = this.props;
    // eslint-disable-next-line
    const { geocode } = this.props.ymaps;

    fetchAddressList();
    const result = await geocode(value);
    const formattedData = formatGeocoderResponse(result.geoObjects);
    fetchAddressListSuccess(formattedData);
  }

  handleInputChange = e => {
    e.persist();
    const { value } = e.target;

    this.setState({ value });
    this.debouncedFetchAddressList(value);
  }

  handleKeyDown = e => {
    const { onSubmit } = this.props;

    if (e.keyCode === 13) {
      onSubmit();
      this.clearInputValue();
    }
  }

  clearInputValue() {
    this.setState({ value: '' });
  }

  render() {
    const {
      onClickOutside,
      isAddressFetching,
      isAddressListVisible,
    } = this.props;

    const { value } = this.state;

    const {
      handleKeyDown,
      handleInputChange,
    } = this;

    const isEnterIconVisible = !isAddressFetching && isAddressListVisible;

    return (
      <AddressInputBlock>
        <OutsideClickHandler onOutsideClick={onClickOutside}>
          <Input
            data-e2e-id="address-input"
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={value}
          />
        </OutsideClickHandler>
        {isAddressFetching && <Spinner />}
        {isEnterIconVisible && <EnterButtonIcon />}
      </AddressInputBlock>
    );
  }
}

export default withYMaps(AddressInput);
