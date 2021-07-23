import React, { Fragment } from 'react';
import { Grid, Typography, Link, Container } from '@material-ui/core';
import { navigate } from '@reach/router';
import {StoriesFull} from './Stories';


export const Stories_Page_Const = props => {
  //here you define the "props", that'll be insert into the page
  //you lay out the content of repeated elements, templates basically

  const elements = ['zero','one', 'two', 'three','four','five','six'];

  //return lists teh content of the page
  return (
    //needs to be nested INSIDE an element, e.g. the ul, to wrap around the content
    //Showing the stories requires the StoriesFull call in carrots for some reason
    <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <div className="header">
            <Typography align="center" color="primary" variant="h4">
              Stories
            </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <StoriesFull />
          </Grid>
        </Grid>
      </Container>

  );

};



export default Stories_Page_Const;
