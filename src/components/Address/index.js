import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addressShape } from 'store/reducers/addresses';
import {
  fetchAddressList,
  fetchAddressListSuccess,
  addPoint,
} from 'store/actionCreators';

import {
  generateAddressId,
} from 'helpers';

import AddressInput from '../AddressInput';
import AddressList from '../AddressList';

import { AddressBlock } from './Address.styled';


export class Address extends Component {

  state = { isAddressListVisible: false }

  static propTypes = {
    addresses: PropTypes.arrayOf(PropTypes.shape(addressShape)).isRequired,
    fetchAddressList: PropTypes.func.isRequired,
    fetchAddressListSuccess: PropTypes.func.isRequired,
    addPoint: PropTypes.func.isRequired,
    isAddressFetching: PropTypes.bool.isRequired,
  }

  componentDidUpdate(prevProps) {
    const { addresses } = this.props;
    
    if (addresses.length && !prevProps.addresses.length) {
      this.showAddressList()
    }
  }

  onClickOutside = () => {
    this.hideAddressList();
  }

  handleAddressInputKeyDown = (e) => {
    const {
      addresses,
      addPoint, 
    } = this.props;

    if (!addresses.length) return;

    if (e.keyCode === 13) {
      addPoint(addresses[0], generateAddressId());
      this.hideAddressList();
    }
  }

  showAddressList() {
    this.setState({ isAddressListVisible: true });
  }

  hideAddressList() {
    this.setState({ isAddressListVisible: false });
  }

  render() {
    const {
      onClickOutside,
      handleAddressInputKeyDown,
    } = this;

    const {
      fetchAddressList,
      fetchAddressListSuccess,
      addPoint,
      addresses,
      isAddressFetching,
    } = this.props;

    const { isAddressListVisible } = this.state;

    return ( 
      <AddressBlock>
        <AddressInput
          fetchAddressList={fetchAddressList}
          fetchAddressListSuccess={fetchAddressListSuccess}
          onClickOutside={onClickOutside}
          isAddressFetching={isAddressFetching}
          onKeyDown={handleAddressInputKeyDown}
          isAddressListVisible={isAddressListVisible}
        /> 
        <AddressList 
          addresses={addresses}
          isVisible={isAddressListVisible}
          addPoint={addPoint} 
        /> 
      </AddressBlock>
    );
  }
}

const mapStateToProps = (state) => ({
  addresses: state.addresses.list,
  isAddressFetching: state.addresses.isFetching,
});

const mapActionCreators = {
  fetchAddressList,
  fetchAddressListSuccess,
  addPoint,
};

export default connect(mapStateToProps, mapActionCreators)(Address);