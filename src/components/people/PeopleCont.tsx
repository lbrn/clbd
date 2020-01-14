import React, { useEffect, useState } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { Router, navigate } from '@reach/router';

import { people } from '../../data/people';
import People from './People';
import PersonDetails from './PersonDetails';
import classes from '*.module.css';

const useStyles = makeStyles({
  router: {
    width: '100%',
  },
});

const PeopleCont = props => {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    setData(people);
  }, []);

  return (
    <Container>
      <Grid item id="peopleCont" xs={12} container spacing={3} justify="center">
        <Grid container item xs={12}>
          {data && (
            <Router className={classes.router}>
              <People path="/" data={data} />
              <PersonDetails path="individual/:name" data={data} />
            </Router>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PeopleCont;
