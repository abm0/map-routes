import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { observer, inject } from "mobx-react";
import styled from 'styled-components';

import AddressInput from './AddressInput';
import AddressList from './AddressList';

// import {
//   fetchAddressList,
//   addPoint
// } from 'store/actionCreators';

import {
  generateAddressId
} from 'helpers';

const AddressBlock = styled.div `
  z-index: 2;
  position: fixed;
  top: 20px;
  left: 20px;

  @media screen and (max-width: 448px) {
    top: 0;
    left: 0;
    width: 100%;
  }
`;

@inject('addressesStore')
@observer
class Address extends Component {
  state = {
    isAddressListVisible: false,
  }

  static propTypes = {
    addresses: PropTypes.array.isRequired,
    fetchAddressList: PropTypes.func.isRequired,
    addPoint: PropTypes.func.isRequired,
  }

  static defaultProps = {
    addresses: [],
    fetchAddressList: () => {},
    addPoint: () => {},
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.addressesStore.addresses.length && !prevProps.addressesStore.addresses.length) {
      this.showAddressList();
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
      // addresses,
      // fetchAddressList,
      // addPoint,
      // isAddressFetching,
      fetchAddressList,
      addresses,
      isFetching,
    } = this.props.addressesStore;

    const {
      isAddressListVisible,
    } = this.state;

    console.log('isAddressListVisible:', isAddressListVisible);

    return ( 
      <AddressBlock >
        <AddressInput
          fetchAddressList={fetchAddressList}
          onClickOutside={onClickOutside}
          isAddressFetching={isFetching}
          onKeyDown={handleAddressInputKeyDown}
        /> 
        <AddressList 
          addresses={toJS(addresses)}
          isVisible={isAddressListVisible}
          addPoint={() => {}} 
        /> 
      </AddressBlock>
    );
  }
}

// const mapStateToProps = (state) => ({
//   addresses: state.addresses.list,
//   isAddressFetching: state.addresses.isFetching,
// });

// const mapActionCreators = {
//   fetchAddressList,
//   addPoint,
// };

// export default connect(mapStateToProps, mapActionCreators)(Address);
export default Address;