import Comment from "../models/Comment";
import Quote from "../models/Quote";

const FIREBASE_API = "https://quotes-app-db9b1-default-rtdb.firebaseio.com";

export async function postNewQuote(quoteData: Quote) {
  const response = await fetch(`${FIREBASE_API}/quotes.json`, {
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

export async function fetchQuotes(): Promise<Quote[]> {
  const response = await fetch(`${FIREBASE_API}/quotes.json`);
  if (!response.ok) {
    throw new Error("Could not fetch quotes.");
  }
  const data = await response.json();
  return data;
}

export async function postNewComment(commentData: Comment) {
  const quoteId = commentData.quoteId.toString();
  const response = await fetch(`${FIREBASE_API}/comments/${quoteId}/comment.json`, {
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

export async function fetchComments(quoteId: string): Promise<Comment[]> {
  const response = await fetch(`${FIREBASE_API}/comments/${quoteId}.json`);
  if (!response.ok) {
    throw new Error("Could not fetch quotes.");
  }
  const data = await response.json();
  return data;
}

