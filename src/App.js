import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PointsList from 'components/PointsList';

import styled from 'styled-components';
import 'styles/general.css';

const Wrapper = styled.div`
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <PointsList />
          </Grid>
          <Grid item xs={6}>

          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

export default App;
