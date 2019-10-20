import React from 'react';
import PropTypes from 'prop-types';

import { generateAddressId } from 'helpers';

import {
  AddressItemBlock,
  ItemName,
  AddButton,
} from './AddressItem.styled';

const AddressItem = ({ address, handleAddClick }) => {
  return (
    <AddressItemBlock
      data-e2e-id="address-item"
    >
      <ItemName>
        {address.name}
      </ItemName>
      <AddButton
        onClick={() => handleAddClick(address, generateAddressId())}
      >
        <i className="icofont-plus"></i>
      </AddButton>
    </AddressItemBlock>
  );
}

AddressItem.propTypes = {
  address: PropTypes.shape({
    description: PropTypes.string,
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  handleAddClick: PropTypes.func.isRequired,
};
 
export default AddressItem;