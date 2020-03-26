import React, { Fragment } from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import ContentPreview from './ContentPreview';
import HeroStory from './HeroStory';
import { themeExtended } from '../theme/theme';
import Stories from './stories/Stories';

const useStyles = makeStyles({
  featured: {
    marginBottom: 40,
    marginTop: 40,
  },
  topSection: {
    backgroundColor: themeExtended.palette.primary.hover,
    marginBottom: 70,
  },
});

const Hero = ({ path }) => {
  const classes = useStyles({});
  return (
    <Fragment>
      <Container className={classes.topSection}>
        <Grid container spacing={3}>
          <Grid className={classes.featured} container spacing={3} item xs={12}>
            <ContentPreview />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} item xs={12}>
          {/* <HeroStory /> */}
          <Stories />
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Hero;
