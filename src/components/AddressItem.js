import React from 'react';
import PropTypes from 'prop-types';

import { generateAddressId } from 'helpers';

const AddressItem = ({ address, handleAddClick }) => {
  return (
    <li className="address-item">
      <span className="address-item__item-name">
        {address.name}
      </span>
      <button
        className="address-item__add-button"
        onClick={() => handleAddClick(address, generateAddressId())}
      >
        <i className="icofont-plus"></i>
      </button>
    </li>
  );
}

AddressItem.propTypes = {
  address: PropTypes.shape({
    description: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  handleAddClick: PropTypes.func.isRequired,
};
 
export default AddressItem;