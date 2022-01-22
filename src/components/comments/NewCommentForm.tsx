import React, { FormEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Comment from "../../models/Comment";
import { postNewComment } from "../../store/storeApi";

import classes from "./NewCommentForm.module.css";

interface INewCommentFormProp {
  quoteId: number;
  onAddComment: () => void;
}
const NewCommentForm: React.FC<INewCommentFormProp> = (props) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const postComment = async (comment: Comment) => {
    setLoading(true);
    setStatus("Pending");
    try {
      await postNewComment(comment);
      setStatus("Complete");
    } catch (error) {
      const err = error as Error;
      console.log(err)
      setError(err.message);
    }
    setLoading(false);
  };

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    const comment: Comment = {
      quoteId: props.quoteId,
      text: commentTextRef.current!.value,
    };

    postComment(comment);
  };

  useEffect(() => {
    if (status === "Complete") {
      props.onAddComment();
    }
  }, [status]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
