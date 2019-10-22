import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddressInput from '../AddressInput';
import AddressList from '../AddressList';

import { AddressBlock } from './Address.styled';

import {
  fetchAddressList,
  fetchAddressListSuccess,
  addPoint,
} from 'store/actionCreators';

import {
  generateAddressId
} from 'helpers';


export class Address extends Component {

  state = {
    isAddressListVisible: false,
  }

  static propTypes = {
    addresses: PropTypes.array.isRequired,
    fetchAddressList: PropTypes.func.isRequired,
    fetchAddressListSuccess: PropTypes.func.isRequired,
    addPoint: PropTypes.func.isRequired,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.addresses.length && !prevProps.addresses.length) {
      this.showAddressList()
    }
  }

  onClickOutside = () => {
    this.hideAddressList();
  }

  showAddressList() {
    this.setState({
      isAddressListVisible: true
    });
  }

  hideAddressList() {
    this.setState({
      isAddressListVisible: false
    });
  }

  handleAddressInputKeyDown = (e) => {
    const {
      addresses
    } = this.props;

    if (!addresses.length) return;

    if (e.keyCode === 13) {
      this.props.addPoint(addresses[0], generateAddressId());
      this.hideAddressList();
    }
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

    const {
      isAddressListVisible,
    } = this.state;

    return ( 
      <AddressBlock >
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