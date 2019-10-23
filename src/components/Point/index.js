import React from 'react';
import PropTypes from 'prop-types';
import { pointShape } from 'store/reducers/points';

import Spinner from '../Spinner';

import {
  PointContainer,
  DragHandle,
  PointName,
  RemoveButton,
  ButtonIcon,
} from './Point.styled';

const Point = ({
  point,
  onPointRemove,
  provided,
}) => {
  return (
    <PointContainer>
      <DragHandle
        {...provided.dragHandleProps}
      >
        <i className="icofont-navigation-menu" />
      </DragHandle>
      <PointName>
        {point.name}
      </PointName>
      {point.isSaving ? (
        <Spinner />
      ) : (
        <RemoveButton
          onClick={() => onPointRemove(point.id)}
        >
          <ButtonIcon className="icofont-bin" />
        </RemoveButton>
      )}
    </PointContainer>
  );
}

Point.propTypes = {
  point: PropTypes.shape(pointShape),
  onPointRemove: PropTypes.func.isRequired,
  // eslint-disable-next-line
  provided: PropTypes.object.isRequired,
};

Point.defaultProps = { point: {} };
 
export default Point;