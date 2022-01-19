import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params: any = useParams();
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const retrieveQuote = () => {
      const quoteId = params.quoteId;
  }

  return <HighlightedQuote author={author} text={text} />;
};

export default QuoteDetail;
