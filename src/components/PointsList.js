import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Point from 'components/Point';

import { removePoint, changePointOrder } from 'store/actionCreators';

const PointsListContainer = styled.div`
  min-height: 30px;
  max-height: 400px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  z-index: 1;
  width: 200px;
  padding-right: 5px;

  @media screen and (max-width: 448px) {
    width: 100%;
    padding-right: 0;
    max-height: 250px;
    overflow: auto;
  }
`;

class PointsList extends Component {
  static propTypes = {
    pointsById: PropTypes.object.isRequired,
    ids: PropTypes.array.isRequired,
    removePoint: PropTypes.func.isRequired,
    changePointOrder: PropTypes.func.isRequired,
  }
    
  onDragEnd = (result) => {
    if (result.reason !== "DROP") return;

    this.props.changePointOrder({
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
            <PointsListContainer
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
                    >
                      <Point
                        point={pointsById[id]}
                        onPointRemove={removePoint}
                        provided={provided}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {/* <button className="points-list__hide-button"></button> */}
            </PointsListContainer>
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
  changePointOrder,
};
 
export default connect(mapStateToProps, mapActionCreators)(PointsList);