import React from "react";
import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { fetchComments } from "../../store/storeApi";
import { useEffect } from "react";
import Comment from "../../models/Comment";
import CommentsList from "./CommentsList";
import { useCallback } from "react";

interface ICommentsProp {
  quoteId: number;
}

const INITIAL_COMMENTS: Comment[] = [];

const Comments: React.FC<ICommentsProp> = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comments, setComments] = useState(INITIAL_COMMENTS);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const retrieveComments = useCallback(async () => {
    try {
      const commentsData = await fetchComments(props.quoteId.toString());
      const commentModels = convertCommentsToModel(commentsData);
      setComments(commentModels);
      return comments;
    } catch (error) {
      console.log("There was error trying to get comments");
    }
  }, [])

  useEffect(() => {
    retrieveComments();
    // return setComments(INITIAL_COMMENTS);
  }, [retrieveComments]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={props.quoteId}
          onAddComment={retrieveComments}
        />
      )}
      {comments.length > 0 && <CommentsList comments={comments} />}
      {comments.length == 0 && <p>Comments...</p>}
    </section>
  );
};

function convertCommentsToModel(commentsObj: any) {
  const jsonComment = Object.keys(commentsObj).map((key) => commentsObj[key]);
  const allComments = Object.keys(jsonComment[0]).map(
    (key) => jsonComment[0][key]
  );

  const commentModels = allComments.map((commentObj: any) => {
    const comment: Comment = {
      quoteId: commentObj.quoteId,
      text: commentObj.text,
      id: commentObj.quoteId + Math.random(),
    };
    return comment;
  });

  return commentModels;
}

export default Comments;
