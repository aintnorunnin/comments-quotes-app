import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import Quote from "../models/Quote";
import { QuotesState } from "../store/Quotes/quotes-slice";
import { addQuote } from "../store/Quotes/quotes-actions";

const NewQuote = () => {
  const history = useHistory();
  const quotesState: QuotesState = useSelector(
    (storeState: any) => storeState.quotes
  );
  const dispatch = useDispatch();

  const addQuoteHandler = (quote: Quote) => {
    dispatch(addQuote(quote));
    history.push("/");
  };

  return (
    <div>
      <QuoteForm isLoading={quotesState.loading} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
