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
  const [data, setData] = useState();

  useEffect(() => {
    setData(seminars);
  }, []);

  const createCards = seminars => {
    console.log(seminars);
    return seminars.map((seminar, index) => (
      <Grid key={`${seminar.name}${index}`} item xs={12} sm={6}>
        <Card
          onClick={e => navigate(`/event/${index}`)}
          className={classes.card}
        >
          <CardMedia component="img" image={seminar.image} className={classes.cardImage} />
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
        {data && createCards(data)}
      </Grid>
    </Container>
  );
};

export default Seminars;
