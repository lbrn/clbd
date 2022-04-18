import React, { useState, Fragment, useEffect } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import {Story, StoryLink} from './Story';
import { articles } from '../../data/articles';
import article from '../../types/article';
//allows linking
import Stories_Page_Const from './Stories_Page';
import { navigate } from '@reach/router';



//limits articles on front page to 3
let sliced = articles.slice(0,4);

const Stories = () => {
  const [stories, setStories] = useState<article[]>([]);
  useEffect(() => {
    setStories(sliced);
  }, []);
  const makeStories = () => {
    return stories
      .filter(story => !story.isFeatured)
      .map((article, i) => <Story key={i} article={article} />);
  };
  return (
    <Fragment>{makeStories()}

    <div className="button">
    <Link variant="body1"
    onClick={() => {
      navigate('/stories');
      //adding links requires them to be routed through the routerwrapper
    }}
    >
    Stories Archive
    </Link>
    </div>
    </Fragment>

  );
};


const StoriesFull = () => {
  const [stories, setStories] = useState<article[]>([]);
  useEffect(() => {
    setStories(articles);
  }, []);
  const makeStories = () => {
    return stories
      .filter(story => !story.isFeatured)
      .map((article, i) => <Story key={i} article={article} />);
  };
  return (
    <Fragment>{makeStories()}
    </Fragment>

  );
};
const StoriesSmall = () => {
  const [stories, setStories] = useState<article[]>([]);
  useEffect(() => {
    setStories(articles);
  }, []);
  const makeStories = () => {
    return stories
      .map((article, i) => <StoryLink key={i} article={article} />);
  };
  return (
    <Fragment>
      {makeStories()}
    </Fragment>

  );
};
//this is an alternate to the standard export default - and requires the import to be in brackets when imported
export  {
  Stories,
  StoriesFull,
  StoriesSmall,
}
