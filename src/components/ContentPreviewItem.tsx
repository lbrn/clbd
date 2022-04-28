import React from 'react';
import { makeStyles, Typography, Grid, Link } from '@material-ui/core';
import { theme } from '../theme/theme';
import { navigate } from '@reach/router';
import CovidAnnouncement from './seminars/CovidAnnouncement';

const useStyles = makeStyles({
  imgCont: {
    width: '100%',
    maxHeight: 300,
    // maxWidth: '50%',
    flexGrow: 1,
    marginLeft: '-12px',
  },
  img: {
    width: '100%',
    maxHeight: 300,
    maxWidth: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '12px',
    paddingRight: '12px',
    // paddingTop: '20%',
    objectFit: 'contain',
    alignSelf: 'baseline',
  },
  title: {
    paddingTop: theme.spacing(3),
  },
  cont: {
    // backgroundColor: themeExtended.palette.primary.hover,
    // backgroundColor: 'red',
    flexGrow: 1,
    maxWidth: '100%',
  },
  textCont: {
    padding: 10,
    // maxWidth: '50%',
    // marginLeft: 'auto',
  },
});

interface contentPreviewItemProps {
  featured: any;
  id: number;
  code: string;
}

const ContentPreviewItem = ({ featured, code }: contentPreviewItemProps) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6} className={classes.cont}>
      <Grid container item xs={12} sm={4} className={classes.imgCont}>
        <img
          src={featured.image}
          className={classes.img}
          alt={`${featured.title}`}
        />
      </Grid>
      <Grid item xs={12} sm={8} className={classes.textCont}>
        {featured.title && (
          <Typography align="center" variant="h5" className={classes.title}>
            {/* gets first part of title for preview */}
            {featured.title.split(':')[0]}
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
        {featured.description && (
          <Typography align="center" variant="body1">
            {featured.description && featured.description}
          </Typography>
        )}
        {featured.contentPreview && (
          <Typography align="center" variant="body1">
            {featured.contentPreview && featured.contentPreview}
          </Typography>
        )}
        {(featured.link || featured.code !== 'ARTICLE') && (
          <Typography align="center">
            <Link
              onClick={e => {

                navigate(
                  code === 'ARTICLE' ? featured.link : `event/${featured.id}`,
                  { state: { code: featured.code } },
                );
              }}
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
