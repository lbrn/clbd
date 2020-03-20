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
  const currentSeminars = seminars.filter(seminar => seminar.date && seminar.date.isAfter());
  const featuredSeminar =
    seminars.filter(seminar => seminar.featured)[0] || currentSeminars[0];
  const featuredNews = [featuredSeminar, articles[0]];

  const createFeaturedItems = items => {
    return items.map((item, index) => (
      <ContentPreviewItem
        key={index}
        code={item.code}
        featured={item}
        id={index}
      />
    ));
  };
  return <Fragment>{createFeaturedItems(featuredNews)}</Fragment>;
};

export default ContentPreview;
