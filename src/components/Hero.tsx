import React, { Fragment } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import beakerImage from '../assets/misc/beakers.jpg';
import ContentPreview from './ContentPreview';
import HeroStory from './HeroStory';

const useStyles = makeStyles({
  background: {
    height: `500px`,
    backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, .7), rgba(19, 127, 222, .6)), url(${beakerImage})`,
    backgroundSize: 'cover',
    filter: 'sepia(25%)',
  },
});

const Hero = ({ path }) => {
  const classes = useStyles({});
  return (
    <Fragment>
		<Container>
      <Grid container>
        <Grid container item xs={12}>
          <ContentPreview />
        </Grid>
        <Grid container item xs={12}>
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
