import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './mixins/Button';

import { generateAddressId } from 'helpers';

const AddressItemBlock = styled.li`
  display: flex;
  padding: 4px;
`;

const ItemName = styled.span`
  flex-grow: 2;
  cursor: default;
  padding-left: 5px;
`;

const AddressItem = ({ address, handleAddClick }) => {
  return (
    <AddressItemBlock>
      <ItemName>
        {address.name}
      </ItemName>
      <Button
        onClick={() => handleAddClick(address, generateAddressId())}
      >
        <i className="icofont-plus"></i>
      </Button>
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