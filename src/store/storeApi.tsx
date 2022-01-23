import Comment from "../models/Comment";
import Quote from "../models/Quote";

const FIREBASE_API = "https://quotes-app-db9b1-default-rtdb.firebaseio.com";

export async function postNewQuote(quoteData: Quote) {
  const response = await fetch(`${FIREBASE_API}/quotes/${quoteData.id}.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function fetchQuotes() {
  const response = await fetch(`${FIREBASE_API}/quotes.json`);
  if (!response.ok) {
    throw new Error("Could not fetch quotes.");
  }
  const data = await response.json();
  return transformQuotes(data);
}

export async function fetchQuote(quoteId: string) {
  const response = await fetch(`${FIREBASE_API}/quotes/${quoteId}.json`);
  if (!response.ok) {
    throw new Error("Could not fetch quote.");
  }
  const data = await response.json();
  return transformQuote(data);
}

export async function postNewComment(commentData: Comment) {
  const quoteId = commentData.quoteId.toString();
  const response = await fetch(`${FIREBASE_API}/comments/${quoteId}.json`, {
    method: "POST",
    body: JSON.stringify(commentData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create comment.");
  }

  return null;
}

export async function fetchComments(quoteId: string) {
  const response = await fetch(`${FIREBASE_API}/comments/${quoteId}.json`);
  if (!response.ok) {
    throw new Error("Could not fetch quotes.");
  }
  const data = await response.json();
  return transformComments(data);
}

function transformQuote(dataObj: any): Quote {
  const jsonQuote = Object.keys(dataObj).map((key) => dataObj[key]);
  const firebaseQuote = jsonQuote[0];
  const quote: Quote = {
    id: firebaseQuote.id,
    author: firebaseQuote.author,
    text: firebaseQuote.text,
  };

  return quote;
}

function transformQuotes(dataObj: any): Quote[] {
  const jsonQuotes = Object.keys(dataObj).map((key) => dataObj[key]);
  const allQuoteObjs = [];
  for (let idx = 0; idx < jsonQuotes.length; idx++) {
    const fireBaseQuoteObj = jsonQuotes[idx];
    const value = Object.values(fireBaseQuoteObj)[0];
    allQuoteObjs.push(value);
  }

  const transformedQuotes = allQuoteObjs.map((quoteObj: any) => {
    const quote: Quote = {
      id: quoteObj.id,
      author: quoteObj.author,
      text: quoteObj.text,
    };
    return quote;
  });

  return transformedQuotes;
}

function transformComments(commentsObj: any): Comment[] {
  const jsonComments = Object.keys(commentsObj).map((key) => commentsObj[key]);
  return jsonComments.map((commentObj: any) => {
    const comment: Comment = {
      quoteId: commentObj.quoteId,
      text: commentObj.text,
      id: commentObj.quoteId + Math.random(),
    };
    return comment;
  });
}
