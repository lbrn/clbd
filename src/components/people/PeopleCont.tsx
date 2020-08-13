import React, { useEffect, useState } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { Router } from '@reach/router';

import { people } from '../../data/people';
import People from './People';
import PersonDetailsModel from './PersonDetailsModel';
import { theme } from '../../theme/theme';

const useStyles = makeStyles({
  router: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
});

const PeopleCont = props => {
  const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(people);
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid item id="peopleCont" xs={12} container spacing={3} justify="center">
        <Grid container item xs={12}>
          {data && (
            <Router className={classes.router}>
              <People path="/:group" data={data} />
              <People path="/" data={data} />
              <PersonDetailsModel path="individual/:code"/>
            </Router>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PeopleCont;
