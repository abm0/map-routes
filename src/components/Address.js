import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AddressInput from './AddressInput';
import AddressList from './AddressList';

import { fetchAddressList, addPoint } from 'store/actionCreators';

import { generateAddressId } from 'helpers';

const AddressBlock = styled.div`
  z-index: 2;
  position: fixed;
  top: 20px;
  left: 20px;
`;

export class Address extends Component {

  state = {
    isAddressListVisible: false,
  }
  
  static propTypes = {
    addresses: PropTypes.array.isRequired,
    fetchAddressList: PropTypes.func.isRequired,
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
    this.setState({ isAddressListVisible: true });
  }

  hideAddressList() {
    this.setState({ isAddressListVisible: false });
  }
  
  handleAddressInputKeyDown = (e) => {
    const { addresses } = this.props;

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
      addresses,
      fetchAddressList,
      addPoint,
      isAddressFetching,
    } = this.props;

    const {
      isAddressListVisible,
    } = this.state;

    return (
      <AddressBlock>
        <AddressInput
          fetchAddressList={fetchAddressList}
          onClickOutside={onClickOutside}
          isAddressFetching={isAddressFetching}
          onKeyDown={handleAddressInputKeyDown}
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
  addPoint,
};
 
export default connect(mapStateToProps, mapActionCreators)(Address);