import React from "react";
import Comment from "../../models/Comment";
import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props: any) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment: Comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
