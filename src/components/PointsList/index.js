import React, { Component, Fragment } from 'react';
import Point from 'components/Point';

class PointsList extends Component {
  state = {
    points: [
      {
        name: 'point 1',
      },
      {
        name: 'point 2',
      },
      {
        name: 'point 3',
      },
    ]
  }
  
  render() { 
    return (
      <Fragment>
        {this.state.points.map((point, index) => (
          <Point key={`point-${index}`} data={point} />
        ))}
      </Fragment>
    );
  }
}
 
export default PointsList;