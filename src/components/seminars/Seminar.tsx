import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Container,
  makeStyles,
  Button,
  Link,
} from '@material-ui/core';

import { theme } from '../../theme/theme';
import { seminars } from '../../data/seminars';
import CovidAnnouncement from './CovidAnnouncement';
import { seminar } from '../../models/seminar';

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

const Seminar = ({seminar}) => {
  const classes = useStyles();
//   const [seminar, setSeminar] = useState<undefined | seminar>();
//   console.log(props.location.state);
//   useEffect(() => {
//     // index comes from url
//     setSeminar(seminars[props.seminarIndex]);
//   }, [props.seminarIndex]);

  if (seminar.code === 'ANNOUNCEMENT') {
    return <CovidAnnouncement announcement={seminar} />;
  } else
    return (
      <Container className={classes.cont}>
        <Grid container spacing={3}>
          {seminar && (
            <Grid container item xs={12} sm={8}>
              <Grid item xs={12}>
                <Typography variant="h4">{seminar.title}</Typography>
                {seminar.date && (
                  <Typography variant="h5">
                    {seminar.date.format('MM/DD/YY')}
                  </Typography>
                )}
                <Typography variant="body1">
                  {seminar.time && seminar.time}
                </Typography>
                {seminar.registrationLink && (
                  <Button
                    href={seminar.registrationLink}
                    variant="outlined"
                    color="primary"
                  >
                    registration information
                  </Button>
                )}
                {seminar.registrationDueDate && (
                  <Typography variant="body1">
                    Register by {seminar.registrationDueDate.format('MM/DD/YY')}
                  </Typography>
                )}
                <Typography variant="body1">
                  {seminar.location && seminar.location}
                </Typography>
                {seminar.speakers && (
                  <Typography variant="body1">
                    Speakers for this event: {seminar.speakers}
                  </Typography>
                )}
                <Typography variant="body1">
                  {seminar.speakerUniversities && seminar.speakerUniversities}
                </Typography>
                {seminar.cost && (
                  <Typography variant="body1">
                    Cost: {seminar.cost ? seminar.cost : 'free'}
                  </Typography>
                )}
                {seminar.link && (
                  <Typography variant="body1">
                    Video: <Link href={seminar.link}></Link>
                  </Typography>
                )}
                {/* {seminar.description && (
                <Typography variant="body1">{seminar.description()}</Typography>
              )} */}
              </Grid>
            </Grid>
          )}
          {seminar && seminar.image && (
            <Grid container item xs={12} sm={4}>
              <a href={seminar.pdfLink}>
                <img
                  alt="event flyer"
                  src={seminar.image}
                  className={classes.pdf}
                ></img>
              </a>
            </Grid>
          )}
        </Grid>
        {seminar && seminar.hasMap !== false && (
          <Grid item xs={12}>
            <iframe
              title="event map"
              className={classes.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13763.17090881741!2d-91.2020158014031!3d30.413622109420405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a73e9f2335b1%3A0x3180fa3441356916!2sLSU%20School%20of%20Veterinary%20Medicine!5e0!3m2!1sen!2sus!4v1579642103972!5m2!1sen!2sus"
            ></iframe>
          </Grid>
        )}
      </Container>
    );
};

export default Seminar;
