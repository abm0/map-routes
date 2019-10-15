import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import button from 'styles/styled-mixins/button';

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

const AddButton = styled.button`
 ${button}
`;

const AddressItem = ({ address, handleAddClick }) => {
  return (
    <AddressItemBlock>
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