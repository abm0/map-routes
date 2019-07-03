import React from 'react';

const AddressItem = ({ name }) => {
  return (
    <li className="address-item">
      <span className="address-item__item-name">
        {name}
      </span>
      <button className="address-item__add-button">
        <i className="icofont-plus"></i>
      </button>
    </li>
  );
}
 
export default AddressItem;