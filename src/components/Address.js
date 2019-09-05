import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddressInput from './AddressInput';
import AddressList from './AddressList';

import { fetchAddressList, addPoint } from 'store/actionCreators';

class Address extends Component {

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
      this.setState({ isAddressListVisible: true });
    }
  }

  onClickOutside = () => {
    this.setState({ isAddressListVisible: false });
  }
  
  render() { 
    const {
      onClickOutside
    } = this;

    const { 
      addresses,
      fetchAddressList,
      addPoint,
    } = this.props;

    const {
      isAddressListVisible,
    } = this.state;

    return (
      <div className="address-block">
        <AddressInput
          fetchAddressList={fetchAddressList}
          onClickOutside={onClickOutside}
        />
        <AddressList
          addresses={addresses}
          isVisible={isAddressListVisible}
          addPoint={addPoint}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addresses: state.addresses.list,
});

const mapActionCreators = {
  fetchAddressList,
  addPoint,
};
 
export default connect(mapStateToProps, mapActionCreators)(Address);