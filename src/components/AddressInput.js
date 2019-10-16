import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import OutsideClickHandler from 'react-outside-click-handler';
import Spinner from './Spinner';

const AddressInputBlock = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  border: 1px solid #e4e4e4;
  width: 392px;
  display: flex;
  flex-direction: row;
  z-index: 3;
  position: relative;
  box-shadow: none;
  transition: ease .3s box-shadow;

  @media screen and (max-width: 448px) {
    width: 100%;
    border-radius: 0;
  }
`;

// TODO: add flex-grow: 1 to child blocks
const Input = styled.input`
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
  border-radius: 3px;
  border: none;
  height: 24px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

class AddressInput extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    fetchAddressList: PropTypes.func.isRequired,
    isAddressFetching: PropTypes.bool.isRequired,
  }
  
  constructor(props) {
    super(props);
    this.delayedAddressRequest = debounce(this.props.fetchAddressList, 1000);
  }
  
  handleInputChange = (e) => {
    this.delayedAddressRequest(e.target.value);
  }

  render() {
    const { 
      onClickOutside,
      isAddressFetching,
      onKeyDown,
    } = this.props;

    return (
      <AddressInputBlock>
        <OutsideClickHandler
          onOutsideClick={onClickOutside}
        >
          <Input
            type="text"
            placeholder="Search..."
            onChange={this.handleInputChange}
            onKeyDown={onKeyDown}
          />
        </OutsideClickHandler>
        {isAddressFetching && (
          <Spinner />
        )}
      </AddressInputBlock>
    );
  }
}
 
export default AddressInput;