import styled from 'styled-components';

export const PointsListContainer = styled.div`
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