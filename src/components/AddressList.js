import React from 'react';
import AddressItem from './AddressItem';

const items = [
  {
    name: 'Address 1',
    id: 1,
  },
  {
    name: 'Address 2',
    id: 2,
  },
  {
    name: 'Address 3',
    id: 3,
  },
]

const AddressList = () => {
  return (
    <ul className="address-list">
      {items.map(({ name, id }) => (
        <AddressItem
          name={name}
          key={id}
        />
      ))}
    </ul>
  );
}
 
export default AddressList;