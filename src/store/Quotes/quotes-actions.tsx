import { quoteActions } from "./quotes-slice";
import { postNewQuote, fetchQuotes } from "../storeApi";
import Quote from "../../models/Quote";

export const addQuote = (quote: Quote) => {
  return async (dispatch: any) => {
    try {
      dispatch(quoteActions.setLoading(true));
      await postNewQuote(quote);
      dispatch(quoteActions.addQuote(quote));
    } catch (error) {
      const er = error as Error;
      dispatch(quoteActions.setError(er.message));
    }
    dispatch(quoteActions.setLoading(false));
  };
};

export const getQuotes = () => {
  return async (dispatch: any) => {
    try {
      dispatch(quoteActions.setLoading(true));
      const quotesData = await fetchQuotes();
      dispatch(quoteActions.getQuotes(quotesData))
    } catch (error) {
      const er = error as Error;
      dispatch(quoteActions.setError(er.message));
    }
    dispatch(quoteActions.setLoading(false));
  };
};


