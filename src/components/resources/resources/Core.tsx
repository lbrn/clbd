import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

import linkType from '../../../models/link';

const Core = props => {
  function titleCase(str: string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  const createLinks = (links: linkType[]) => {
    return props.links.map(item => (
      <Link
        href="https://www.amazon.com"
        target="_blank"
        variant="body1"
        key={item.link}
      >
        {item.title}
      </Link>
    ));
  };
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">{titleCase(props.name)}</Typography>
      </Grid>
      <Grid item xs={12}>
        {createLinks(props.links)}
      </Grid>
    </Fragment>
  );
};

export default Core;
