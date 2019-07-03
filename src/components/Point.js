import React, { Component } from 'react';

const Point = ({ data }) => {
  return (
    <div className="point-item">
      <div className="point-item__drag-handle">
        <i className="icofont-navigation-menu"></i>
      </div>
      <span className="point-item__name">
        {data.name}
      </span>
      <button className="point-item__remove-button">
        <i className="icofont-bin"></i>
      </button>
    </div>
  );
}
 
export default Point;