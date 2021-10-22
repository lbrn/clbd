import React, { Fragment } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ContentPreviewItem from './ContentPreviewItem';
import { seminars } from '../data/seminars';
import { articles } from '../data/articles';

const useStyles = makeStyles({
  previewCont: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 50%',
  },
});

const ContentPreview = () => {
  const currentSeminars = seminars.filter(seminar => seminar.date && seminar.date.isAfter());
  var trackfeat = 0;
  var featuredNews = [articles[0]];
  const featuredSeminar =
    seminars.filter(seminar => seminar.featured)[0] || currentSeminars[0];
    for (let i = 0; i < articles.length; i++) {
      const element = articles[i];
      // console.log(articles[i].title);
      if (articles[i].isFeatured && trackfeat < 2) {
        featuredNews[trackfeat] = articles[trackfeat];
        trackfeat++;
        // console.log("track" + trackfeat);
      }

    }
    // const featuredNews = [articles[0], articles[1]];
    // console.log(featuredNews);
    //below copy here has a seminar - can use above when there's no seminar
  // const featuredNews = [featuredSeminar, articles[0]];

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
