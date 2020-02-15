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
    height: 400,
  },
});

const Seminars = ({ path }) => {
  const classes = useStyles({});
  const [activeSeminars, setActiveSeminars] = useState();
  const [pastSeminars, setPastSeminars] = useState();

  useEffect(() => {
    const activeSeminars = seminars.filter(seminar =>
      seminar.date.isAfter(moment()),
    );
    const pastSeminars = seminars.filter(seminar =>
      seminar.date.isBefore(moment()),
    );
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
          <CardMedia
            component="img"
            image={seminar.image}
            className={classes.cardImage}
          />
          <CardContent>
            <Typography variant="h5">{seminar.name && seminar.name}</Typography>
            <Typography variant="body1">
              {seminar.title && seminar.title}
            </Typography>
            <Typography variant="body2">
              {seminar.date && seminar.date.format('MM/DD/YY')}
            </Typography>
          </CardContent>
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
