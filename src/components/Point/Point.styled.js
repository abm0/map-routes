import styled from 'styled-components';
import button from 'styles/styled-mixins/button';

export const PointContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;  
  align-items: center;
  margin-bottom: 4px;
  position: relative;
`;

export const DragHandle = styled.div`
  position: relative;
  top: 1px;
`;

export const PointName = styled.span`
  flex-grow: 2;
  padding: 5px;
  cursor: default;
`;

export const RemoveButton = styled.button`
  ${button};
`;

export const ButtonIcon = styled.i`
  font-size: 15px;
`;
