import styled from 'styled-components';
import button from 'styles/styled-mixins/button';

export const AddressItemBlock = styled.li`
  display: flex;
  padding: 4px;
`;

export const ItemName = styled.span`
  flex-grow: 2;
  cursor: default;
  padding-left: 5px;
`;

export const AddButton = styled.button`
 ${button}
`;
