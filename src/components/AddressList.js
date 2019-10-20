import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import AddressItem from './AddressItem';

const AddressListContainer = styled.ul`
  margin: 0 10px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #e4e4e4;
  position: relative;
  padding-top: 10px;
  top: -10px;
  z-index: 2;
  max-height: 300px;
  overflow: auto;
  display: ${(props) => props.isVisible ? 'block' : 'none'};
`;

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
          key={index}
          handleAddClick={addPoint}
        />
      ))}
    </AddressListContainer>
  );
};

AddressList.defaultProps = {
  addresses: [],
  isVisible: false,
  addPoint: () => {},
};

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
  addPoint: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   addresses: state.addresses.list,
// });
 
// export default connect(mapStateToProps, null)(AddressList);
export default AddressList;