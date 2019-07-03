import React, { Component, Fragment } from 'react';
import Point from 'components/Point';

class PointsList extends Component {
  state = {
    points: [
      {
        name: 'point 1',
        id: 1,
      },
      {
        name: 'point 2',
        id: 2,
      },
      {
        name: 'point 3',
        id: 3,
      },
    ]
  }
  
  render() { 
    return (
      <div className="points-list">
        {this.state.points.map((point) => (
          <Point key={point.id} data={point} />
        ))}
        <button className="points-list__hide-button"></button>
      </div>
    );
  }
}
 
export default PointsList;