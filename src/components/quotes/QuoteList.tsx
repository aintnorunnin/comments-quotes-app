import React from "react";
import { Fragment } from "react";
import Quote from "../../models/Quote";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote: Quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
