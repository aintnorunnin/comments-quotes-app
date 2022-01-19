import React from "react";
import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props: any) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.quoteId}`}>View Detail Page</Link>
    </li>
  );
};

export default QuoteItem;
