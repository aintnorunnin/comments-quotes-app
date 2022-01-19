import React from 'react';
import classes from './HighlightedQuote.module.css';

interface HighlightedQuoteProps {
  author: string,
  text: string,
}

const HighlightedQuote: React.FC<HighlightedQuoteProps> = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
