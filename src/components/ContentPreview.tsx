import React, { Fragment } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ContentPreviewItem from './ContentPreviewItem';
import { seminars } from '../data/seminars';
import { articles } from '../data/articles';

const useStyles = makeStyles({
  previewCont: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const ContentPreview = () => {
  const classes = useStyles({});
  const currentSeminars = seminars.filter(seminar => seminar.date.isAfter());
  const featuredSeminar =
    seminars.filter(seminar => seminar.featured)[0] || currentSeminars[0];
  const featuredNews = [featuredSeminar, articles[0]];

  const createFeaturedItems = items => {
    return items.map((item, index) => (
      <Grid
        container
        item
        xs={12}
        md={6}
        justify="center"
        alignItems="center"
        className={classes.previewCont}
        key={index}
      >
        <ContentPreviewItem featured={item} id={index} />
      </Grid>
    ));
  };
  return <Fragment>{createFeaturedItems(featuredNews)}</Fragment>;
};

export default ContentPreview;
