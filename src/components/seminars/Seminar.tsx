import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';

import { theme } from '../../theme/theme';
import { seminars } from '../../data/seminars';

const useStyles = makeStyles({
  cont: {
    marginTop: theme.spacing(3),
  },
  pdf: {
    width: '100%',
    height: '50vh',
  },
});
const Seminar = props => {
  const classes = useStyles();
  const [seminar, setSeminar] = useState();
  console.log(process.env);
  useEffect(() => {
    // index comes from url
    setSeminar(seminars[props.seminarIndex]);
  }, []);

  console.log(process.env.GOOGLE_API_KEY)

  return (
    <Container className={classes.cont}>
      <Grid container spacing={3} justify="flex-start">
        {seminar && (
          <Grid container item xs={12} sm={8}>
            <Grid item xs={12}>
              <Typography variant="h4">{seminar.title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                {seminar.date.format('MM/DD/YY')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {seminar.time && seminar.time}
              </Typography>
            </Grid>
            {seminar.registrationLink && (
              <Grid item xs={12}>
                <Button
                  href={seminar.registrationLink}
                  variant="outlined"
                  color="primary"
                >
                  registration information
                </Button>
                {seminar.registrationDueDate && (
                  <Typography variant="body1">
                    Register by {seminar.registrationDueDate.format('MM/DD/YY')}
                  </Typography>
                )}
              </Grid>
            )}
            <Typography variant="body1">
              {seminar.location && seminar.location}
            </Typography>
            <Typography variant="body1">
              Speakers for this event: {seminar.speakers && seminar.speakers}
            </Typography>
            <Typography variant="body1">
              Cost: {seminar.cost ? seminar.cost : 'free'}
            </Typography>
          </Grid>
        )}
        {seminar && seminar.pdfLink && (
          <Grid container item xs={12} sm={4}>
            <iframe src={seminar.pdfLink} className={classes.pdf}></iframe>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <iframe
          // width="600"
          // height="450"
          // frameborder="0"
          // style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNd7pUiGnJoYRq1cQ0ezXyhs&key=AIzaSyBl4O6sNcvfM1sa7WJG7iIfBdOckMTteiI"
          // allowfullscreen
        ></iframe>
      </Grid>
    </Container>
  );
};

export default Seminar;
