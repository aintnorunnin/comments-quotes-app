import React, { FormEvent, Fragment, useState } from "react";
import { useRef } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import Quote from "../../models/Quote";

export interface QuoteFormProps {
  onAddQuote: (quote: Quote) => void;
  isLoading: boolean;
}

const QuoteForm: React.FC<QuoteFormProps> = (props) => {
  const [formFocused, setFormFocused] = useState(false);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function onFocusHandler(value: boolean) {
    setFormFocused(value);
  }
  
  function submitFormHandler(event: FormEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here
    const quote: Quote = {
      author: enteredAuthor,
      text: enteredText,
      id: Math.floor(Math.random() * 9999999),
    };

    props.onAddQuote(quote);
  }

  return (
    <Fragment>
      <Prompt when={formFocused} message="Are you sure you want to leave?" />
      <Card>
        <form
          onFocus={onFocusHandler.bind(null,true)}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={onFocusHandler.bind(null,false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
