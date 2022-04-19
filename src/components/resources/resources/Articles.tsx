import React, { Fragment } from 'react';
import { Grid, Typography, Link, Container } from '@material-ui/core';
import { navigate } from '@reach/router';
import {StoriesSmall} from '../../stories/Stories';

export const Articles = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
      <Typography variant="h5">News Articles</Typography>
      </Grid>
      <Grid item xs={12}>
        <StoriesSmall />
      </Grid>

    </Fragment>
  );
};

export default Articles;
