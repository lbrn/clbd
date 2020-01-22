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
    // height: 200,
  },
  map: {
    marginTop: '5vh',
    width: '100%',
    height: 450,
    frameborder: 0,
    border: 0,
    allowfullscreen: '',
  },
});

const Seminar = props => {
  const classes = useStyles();
  const [seminar, setSeminar] = useState();
  useEffect(() => {
    // index comes from url
    setSeminar(seminars[props.seminarIndex]);
  }, []);
  console.log(seminar && seminar.image)

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
        {seminar && seminar.image && (
          <Grid container item xs={12} sm={4}>
            <a href={seminar.pdfLink}>
              <img src={seminar.image} className={classes.pdf}></img>
            </a>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <iframe
          className={classes.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13763.17090881741!2d-91.2020158014031!3d30.413622109420405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a73e9f2335b1%3A0x3180fa3441356916!2sLSU%20School%20of%20Veterinary%20Medicine!5e0!3m2!1sen!2sus!4v1579642103972!5m2!1sen!2sus"
          // width="600"
          // height="450"
          // frameborder="0"
          // style="border:0;"
          // allowfullscreen=""
        ></iframe>
      </Grid>
    </Container>
  );
};

export default Seminar;
