import React, { useState, Fragment, useEffect } from 'react';
import Story from './Story';
import { articles } from '../../data/articles';
import article from '../../models/article';

const Stories = () => {
  const [stories, setStories] = useState<article[]>([]);
  useEffect(() => {
    setStories(articles);
  }, []);
  const makeStories = () => {
    return stories.map(article => <Story article={article} />);
  };
  return <Fragment>{makeStories()}</Fragment>;
};

export default Stories;
