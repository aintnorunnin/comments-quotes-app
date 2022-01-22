import React from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import Quote from "../models/Quote";
import { useSelector } from "react-redux";
import { QuotesState } from "../store/Quotes/quotes-slice";

interface QuoteDetailURLParams {
  quoteId: string;
}

const QuoteDetail = () => {
  const params = useParams<QuoteDetailURLParams>();
  const match = useRouteMatch();
  const quotesState: QuotesState = useSelector(
    (storeState: any) => storeState.quotes
  );

  const quote: Quote | undefined = quotesState.quotes.find(
    (quote) => quote.id.toString() === params.quoteId
  );

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
        <Comments quoteId={quote.id}/>
      </Route>
    </div>
  );
};

export default QuoteDetail;
