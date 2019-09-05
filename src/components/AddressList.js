import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import AddressItem from './AddressItem';

const AddressList = ({ 
  addresses, 
  isVisible, 
  addPoint,
}) => {
  const className = isVisible ? 'address-list visible' : 'address-list';
  
  return (
    <ul className={className}>
      {addresses.map((address, index) => (
        <AddressItem
          address={address}
          key={index}
          handleAddClick={addPoint}
        />
      ))}
    </ul>
  );
};

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
  addPoint: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  addresses: state.addresses.list,
});
 
export default connect(mapStateToProps, null)(AddressList);