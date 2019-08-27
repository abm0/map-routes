import React from 'react';
import PropTypes from 'prop-types';
import AddressItem from './AddressItem';

const AddressList = ({ addresses }) => (
  <ul className="address-list">
    {addresses.map(({ name }, index) => (
      <AddressItem
        name={name}
        key={index}
      />
    ))}
  </ul>
);

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
};
 
export default AddressList;