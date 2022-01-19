import React from 'react';
import classes from './CommentItem.module.css';

const CommentItem = (props:any) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
