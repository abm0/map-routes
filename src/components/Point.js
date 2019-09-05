import React from 'react';
import PropTypes from 'prop-types';

const Point = ({ point, onPointRemove }) => {
  return (
    <div className="point-item">
      <div className="point-item__drag-handle">
        <i className="icofont-navigation-menu"></i>
      </div>
      <span className="point-item__name">
        {point.name}
      </span>
      <button 
        className="point-item__remove-button"
        onClick={onPointRemove}
      >
        <i className="icofont-bin"></i>
      </button>
    </div>
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
};
 
export default Point;