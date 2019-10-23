import React from 'react';
import { connect } from 'react-redux';
import { addressShape } from 'store/reducers/addresses';
import PropTypes from 'prop-types';
import AddressItem from '../AddressItem';

import { AddressListContainer } from './AddressList.styled';

const AddressList = ({ 
  addresses, 
  isVisible, 
  addPoint,
}) => {
  return (
    <AddressListContainer isVisible={isVisible}>
      {addresses.map((address, index) => (
        <AddressItem
          address={address}
          key={`address-${index}`}
          handleAddClick={addPoint}
        />
      ))}
    </AddressListContainer>
  );
};

AddressList.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.shape(addressShape)).isRequired,
  isVisible: PropTypes.bool.isRequired,
  addPoint: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ addresses: state.addresses.list });
 
export default connect(mapStateToProps, null)(AddressList);