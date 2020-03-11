import React from 'react';
import { makeStyles, Typography, Grid, Link } from '@material-ui/core';
import { theme } from '../theme/theme';
import { navigate } from '@reach/router';
import { themeExtended } from '../theme/theme';

const useStyles = makeStyles({
  imgCont: {
    width: '100%',
    maxHeight: 300,
    alignItems: 'center',
    justifyItems: 'center',
  },
  img: {
    width: '100%',
    maxHeight: 300,

    paddingTop: '20%',
  },
  title: {
    paddingTop: theme.spacing(3),
  },
  cont: {
    backgroundColor: themeExtended.palette.primary.hover,
  },
  textCont: {
    padding: 10,
  },
});

interface contentPreviewItemProps {
  featured: any;
  id: number;
  code: string;
}

const ContentPreviewItem = ({
  featured,
  id,
  code,
}: contentPreviewItemProps) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={6} className={classes.cont}>
      <Grid container item xs={4} className={classes.imgCont}>
        <img
          src={featured.image}
          className={classes.img}
          alt={`${featured.title}`}
        />
      </Grid>
      <Grid item xs={8} className={classes.textCont}>
        {featured.title && (
          <Typography align="center" variant="h5" className={classes.title}>
            {featured.title}
          </Typography>
        )}
        {featured.location && (
          <Typography align="center" variant="body1">
            {featured.location && featured.location}
          </Typography>
        )}
        {featured.date && (
          <Typography align="center" variant="body1">
            {featured.date.format('MM/DD/YY')}
          </Typography>
        )}
        {(featured.link || featured.code !== 'ARTICLE') && (
          <Typography align="center">
            <Link
              onClick={() =>
                navigate(
                  code === 'ARTICLE' ? featured.link : `event/${featured.id}`,
                )
              }
            >
              view details
            </Link>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ContentPreviewItem;
