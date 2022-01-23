import React from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import Quote from "../models/Quote";
import { useEffect } from "react";
import { fetchQuote } from "../store/storeApi";
import { useState } from "react";

interface QuoteDetailURLParams {
  quoteId: string;
}

const QuoteDetail = () => {
  const params = useParams<QuoteDetailURLParams>();
  const match = useRouteMatch();
  const [quote, setQuote] = useState<Quote>()

  useEffect(() => {
    async function getQuote() {
      const quote = await fetchQuote(params.quoteId)
      setQuote(quote)
    }
    getQuote();
  }, [params.quoteId]);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <h1>Quote Detail Page</h1>

      <HighlightedQuote author={quote!.author} text={quote!.text} />

      <Route exact path={`${match.url}`}>
        <Link to={`${match.url}/comments`}> Load Comments</Link>
      </Route>

      <Route path={`${match.url}/comments`}>
        <Comments quoteId={quote.id} />
      </Route>
    </div>
  );
};

export default QuoteDetail;
