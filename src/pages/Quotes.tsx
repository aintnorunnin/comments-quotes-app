import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteList from "../components/quotes/QuoteList";
import { QuotesState } from "../store/Quotes/quotes-slice";
import { getQuotes } from "../store/Quotes/quotes-actions";
import { useMemo } from "react";

const Quotes = () => {
  const quotesState: QuotesState = useSelector(
    (storeState: any) => storeState.quotes
  );
  const quotes = useMemo(() => {
    return quotesState.quotes;
  }, [quotesState.quotes]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  return (
    <div>
      <h1>Quotes Page</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default Quotes;
