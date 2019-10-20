import React from 'react';
import PropTypes from 'prop-types';
import {
  PointContainer,
  DragHandle,
  PointName,
  RemoveButton,
  ButtonIcon,
} from './Point.styled';

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