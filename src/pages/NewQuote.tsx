import React, { useState } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import Quote from "../models/Quote";

const NewQuote = () => {
  const [loading, setLoading] = useState(false);
  const addQuoteHandler = (quote: Quote) => {
    setLoading(true);
    console.log(quote);
    setLoading(false);
  };
  return (
    <div>
      <QuoteForm isLoading={loading} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
