import React from "react";
import { useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
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

const Quotes = (props: any) => {
  const [quotesFromDb, setQuotes] = useState([]);

  const retrieveQuotes = () => {};

  return (
    <div>
      <h1>Quotes Page</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default Quotes;
