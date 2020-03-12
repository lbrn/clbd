import React, { useEffect, useState } from 'react';
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Container,
  makeStyles,
  CardMedia,
} from '@material-ui/core';
import { navigate } from '@reach/router';
import moment from 'moment';

import { seminars } from '../../data/seminars';
import { theme, themeExtended } from '../../theme/theme';

const useStyles = makeStyles({
  cont: {
    marginTop: theme.spacing(3),
  },
  cardImage: {
    minHeight: 200,
    maxHeight: 300,
    objectFit: 'contain',
    filter: 'grayscale(70%)',
    transition: 'all .5s',
    '&:hover': {
      filter: 'grayscale(40%)',
    },
  },
  card: {
    backgroundColor: '#fff',
    transition: 'all .5s',
    '&:hover': {
      backgroundColor: themeExtended.palette.primary.hover,
      cursor: 'pointer',
    },
    // select child class
    '&:hover $cardImage': {
      filter: 'grayscale(40%)',
    },
    height: 450,
  },
  cardContent: {
    minHeight: 120,
  },
});

const Seminars = ({ path }) => {
  const classes = useStyles({});
  const [activeSeminars, setActiveSeminars] = useState();
  const [pastSeminars, setPastSeminars] = useState();

  useEffect(() => {
    const activeSeminars = seminars
      .filter(seminar => seminar.date.isAfter(moment()))
      .sort((a, b) => a.date.format('YYYYMMDD') - b.date.format('YYYYMMDD'));
    const pastSeminars = seminars
      .filter(seminar => seminar.date.isBefore(moment()))
      .sort((a, b) => a.date.format('YYYYMMDD') - b.date.format('YYYYMMDD'));
    setActiveSeminars(activeSeminars);
    setPastSeminars(pastSeminars);
  }, []);

  const createCards = seminars => {
    return seminars.map(seminar => (
      <Grid key={seminar.id} item xs={12} sm={6}>
        <Card
          onClick={e => navigate(`/event/${seminar.id}`)}
          className={classes.card}
        >
          <CardContent className={classes.cardContent}>
            {seminar.name && (
              <Typography variant="h5">{seminar.name}</Typography>
            )}
            {seminar.title && (
              <Typography variant="h6">{seminar.title}</Typography>
            )}
            {seminar.date && (
              <Typography variant="body2">
                {seminar.date.format('MM/DD/YY')}
              </Typography>
            )}
          </CardContent>
          <CardMedia
            alt={`event flyer for ${seminar.title}`}
            component="img"
            image={seminar.image}
            className={classes.cardImage}
          />
        </Card>
      </Grid>
    ));
  };

  return (
    <Container className={classes.cont}>
      <Grid spacing={3} container item>
        <Grid item xs={12}>
          <Typography variant="h6">Current Seminars</Typography>
        </Grid>
        {activeSeminars && createCards(activeSeminars)}
      </Grid>
      <Grid spacing={3} container item>
        <Grid item xs={12}>
          <Typography variant="h6">Past Events</Typography>
        </Grid>
        {activeSeminars && createCards(pastSeminars)}
      </Grid>
    </Container>
  );
};

export default Seminars;
