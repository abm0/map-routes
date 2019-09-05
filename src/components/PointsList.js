import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Point from 'components/Point';

import { removePoint, movePoint } from 'store/actionCreators';

class PointsList extends Component {
  static propTypes = {
    pointsById: PropTypes.object.isRequired,
    ids: PropTypes.array.isRequired,
    removePoint: PropTypes.func.isRequired,
    movePoint: PropTypes.func.isRequired,
  }
    
  onDragEnd = (result) => {
    if (result.reason !== "DROP") return;

    this.props.movePoint({
      oldIndex: result.source.index,
      newIndex: result.destination.index,
      addressId: result.draggableId,
    });
  }

  render() {
    const { onDragEnd } = this;
    
    const {
      pointsById,
      ids,
      removePoint,
    } = this.props;

    if (!ids.length) {
      return null;
    }

    return (
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId={'points-droppable'}>
          {provided => (
            <div 
              className="points-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {ids.map((id, index) => (
                <Draggable
                  key={id}
                  draggableId={id}
                  index={index}
                >
                  {provided => (
                    <div 
                      ref={provided.innerRef} 
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Point
                        point={pointsById[id]}
                        onPointRemove={removePoint}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {/* <button className="points-list__hide-button"></button> */}
            </div>
          )}
        </Droppable>  
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  ids: state.points.ids,
  pointsById: state.points.byId,
});

const mapActionCreators = {
  removePoint,
  movePoint,
};
 
export default connect(mapStateToProps, mapActionCreators)(PointsList);