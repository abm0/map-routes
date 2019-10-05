import pointsReducer, { initialPointsState } from '../pointsReducer';
import * as actionCreators from '../../actionCreators';

describe('points reducer', () => {
  const reducerWithInitialState = (action) => pointsReducer(initialPointsState, action);
  
  describe('on POINT_ADD action', () => {
    const newId = new Date().getUTCMilliseconds();
    const newAddress = {
      lat: 'lat',
      lng: 'lng',
    };

    it('should add point to byId object', () => {
      const expectedState = {
        byId: {
          [newId]: {
            id: newId,
            ...newAddress,
          }
        },
        ids: [newId],
      };
      
      const action = actionCreators.addPoint(newAddress, newId);
      const actualState = reducerWithInitialState(action);
      
      expect(actualState).toEqual(expectedState);
    });

    it('should not add point if point with exact same coordinates is present', () => {
      const initialState = {
        byId: {
          [newId]: {
            id: newId,
            lat: 'lat',
            lng: 'lng',
          }
        },
        ids: [newId],
      };

      const expectedState = { ...initialState };

      const action = actionCreators.addPoint(newAddress, newId);
      const actualState = pointsReducer(initialState, action);

      expect(actualState).toEqual(expectedState);
    });
  });

  describe('with non-empty state', () => {
    const firstId = 123;
    const secondId = 456;
    const thirdId = 789;

    const initialState = {
      byId: {
        [firstId]: {
          id: firstId,
          lat: 'lat1',
          lng: 'lng1',
        },
        [secondId]: {
          id: secondId,
          lat: 'lat2',
          lng: 'lng2',
        },
        [thirdId]: {
          id: thirdId,
          lat: 'lat3',
          lng: 'lng3',
        },
      },
      ids: [firstId, secondId, thirdId],
    };

    describe('on POINT_REMOVE action', () => {
      it('should remove point', () => {  
        const expectedState = {
          byId: {
            [secondId]: {
              ...initialState.byId[secondId],
            },
            [thirdId]: {
              ...initialState.byId[thirdId],
            },
          },
          ids: [secondId, thirdId],
        };
  
        const action = actionCreators.removePoint(firstId);
        const actualState = pointsReducer(initialState, action);
  
        expect(actualState).toEqual(expectedState);
      });
    });
  
    describe('on POINT_OREDER_CHANGE action', () => {
      it('should change order of elements in ids array', () => {
        const oldIndex = 1;
        const newIndex = 2;

        const expectedState = {
          byId: {
            ...initialState.byId,
          },
          ids: [firstId, thirdId, secondId],
        };
        
        const action = actionCreators.changePointOrder({ oldIndex, newIndex });
        const actualState = pointsReducer(initialState, action);
  
        expect(actualState).toEqual(expectedState);
      });
    });
  
    describe('on POINT_POSITION_CHANGE action', () => {
      it('should change the coordinates of existing point', () => {
        const newCoordinates = ['lng4', 'lat4'];
        const expectedState = {
          ...initialState,
          byId: {
            ...initialState.byId,
            [secondId]: {
              ...initialState.byId[secondId],
              lng: 'lng4',
              lat: 'lat4',
            }
          },
        };

        const action = actionCreators.updatePointPosition(newCoordinates, secondId);
        const actualState = pointsReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
      });
    });
  });
});