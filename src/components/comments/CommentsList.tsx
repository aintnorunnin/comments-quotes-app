import React from "react";
import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props: any) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment: any) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
