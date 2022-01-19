import React from "react";
import { useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
import Quote from "../models/Quote";

const quote: Quote = {
  id: 1,
  author: "Brandon",
  text: "Today I learned about React Routes",
};
const quotes = [quote];

const Quotes = (props: any) => {
  const [quotesFromDb, setQuotes] = useState([]);

  const retrieveQuotes = () => {};

  return <QuoteList quotes={quotes} />;
};

export default Quotes;
