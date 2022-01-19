import React from "react";
import { Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import Quote from "../models/Quote";

const quotes: Quote[] = [
  {
    id: 1,
    author: "Brandon",
    text: "Today I learned about React Routes",
  },
  {
    id: 2,
    author: "Garrick",
    text: "Bust em up",
  },
];

const QuoteDetail = () => {
  const params: any = useParams();
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const retrieveQuote = () => {
    const quoteId = params.quoteId;
  };

  const quote: Quote | undefined = quotes.find(
    (quote) => quote.id == params.quoteId
  );

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <h1>Quote Detail Page</h1>

      <HighlightedQuote author={quote!.author} text={quote!.text} />

      <Route exact path={`/quotes/${params.quoteId}`}>
        <Link to={`/quotes/${params.quoteId}/comments`}> Load Comments</Link>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
