import React from "react";
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Quote from "../../models/Quote";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortCardinality = queryParams.get("sort");
  const sortedQuotes = generateSortedQuotes(props.quotes, sortCardinality);

  function changeSorting() {
    history.push(
      "/quotes?sort=" + (sortCardinality === "asc" ? "desc" : "asc")
    );
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSorting}>
          Sort {sortCardinality === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote: Quote) => (
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

function generateSortedQuotes(quotes: Quote[], sortCardinality: string | null) {
  return quotes.sort((q1: Quote, q2: Quote) => {
    if (sortCardinality === "asc") {
      return q1.id - q2.id;
    } else {
      return q2.id - q1.id;
    }
  });
}

export default QuoteList;
