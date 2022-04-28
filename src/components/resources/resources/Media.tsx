import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';
import { numbers } from '../../../data/mediaData';
import { posts } from '../../../data/mediaData';
//above you import things needed for the page

export const Media = props => {
  //here you define the "props", that'll be insert into the page
  //you lay out the content of repeated elements, templates basically
  const elements = ['zero','one', 'two', 'three','four','five','six'];
  let sliced = elements.slice(0,4);
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
  {number}
  </li>
  );
  const content = posts.map((post) =>
   <div className="post">
   <a href={post.link}>
     <img alt={post.id} src={post.img}></img>
     <h3 id = {post.id}>{post.title}</h3>
     <p>{post.desc}</p>
   </a>
   </div>
  );
  //return lists teh content of the page
  return (
    //needs to be nested INSIDE an element, e.g. the ul, to wrap around the content
    <Fragment>

      <div className="posts threerow">
      {content}
      </div>
      </Fragment>

  );

};



export default Media;
