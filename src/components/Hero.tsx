import React, { Fragment } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
// import beakerImage from '../assets/misc/beakers.jpg';
import ContentPreview from './ContentPreview';
import HeroStory from './HeroStory';

const useStyles = makeStyles({
  featured: {
    marginBottom: 70,
    marginTop: 70,
    // for Pete's sake, why do I need to do this?
    marginLeft: -2,
  },
});

const Hero = ({ path }) => {
  const classes = useStyles({});
  return (
    <Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid className={classes.featured} container spacing={3} item xs={12}>
            <ContentPreview />
          </Grid>
          <Grid container spacing={3} item xs={12}>
            <HeroStory />
          </Grid>
        </Grid>
      </Container>

      {/* <Grid container className={classes.background} justify="center" alignContent="center" spacing={3}> */}
      {/* </Grid> */}
    </Fragment>
  );
};

export default Hero;
