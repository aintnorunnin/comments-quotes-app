import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import Quote from "../models/Quote";

const NewQuote = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const addQuoteHandler = (quote: Quote) => {
    setLoading(true);
    console.log(quote);
    setLoading(false);
    history.push("/");
  };

  return (
    <div>
      <QuoteForm isLoading={loading} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
