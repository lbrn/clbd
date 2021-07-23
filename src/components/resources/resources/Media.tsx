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
     <h3 id = {post.id}>{post.title}</h3>
     <img src={post.img}></img>
     <p>{post.desc}</p>
   </a>
   </div>
  );
  //return lists teh content of the page
  return (
    //needs to be nested INSIDE an element, e.g. the ul, to wrap around the content
    <Fragment>
      {listItems}
      <hr/>
      <div className="posts threerow">
      {content}
      </div>
      <ul>
        {sliced.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
      </Fragment>

  );

};



export default Media;
