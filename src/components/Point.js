import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './mixins/Button';

const PointContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;  
  align-items: center;
  margin-bottom: 4px;
`;

const DragHandle = styled.div`
  position: relative;
  top: 1px;
`;

const PointName = styled.span`
  flex-grow: 2;
  padding: 5px;
  cursor: default;
`;

const RemoveButton = styled.button`
  ${Button};

  border: none;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 5px;
`;

const ButtonIcon = styled.i`
  font-size: 15px;
`;

const Point = ({ point, onPointRemove, provided }) => {
  return (
    <PointContainer>
      <DragHandle
        {...provided.dragHandleProps}
      >
        <i className="icofont-navigation-menu"></i>
      </DragHandle>
      <PointName>
        {point.name}
      </PointName>
      <RemoveButton
        onClick={() => onPointRemove(point.id)}
      >
        <ButtonIcon className="icofont-bin"></ButtonIcon>
      </RemoveButton>
    </PointContainer>
  );
}

Point.propTypes = {
  point: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
  }),
  onPointRemove: PropTypes.func.isRequired,
  provided: PropTypes.object.isRequired,
};
 
export default Point;