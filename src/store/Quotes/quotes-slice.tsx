import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Quote from "../../models/Quote";

export interface QuotesState {
  quotes: Quote[];
  selectedQuote: Quote | undefined;
  error: string;
  loading: boolean;
}

const INITIAL_QUOTES_STATE: QuotesState = {
  quotes: [],
  selectedQuote: undefined,
  error: "",
  loading: false,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState: INITIAL_QUOTES_STATE,
  reducers: {
    addQuote: (state: QuotesState, action: PayloadAction<Quote>) => {
      state.quotes.push(action.payload);
    },
    getQuote: (state: QuotesState, action: PayloadAction<Quote>) => {
      state.selectedQuote = action.payload;
    },
    getQuotes: (
      state: QuotesState,
      action: PayloadAction<any>
    ) => {
      state.quotes = transformQuotes(action.payload);
    },
    setLoading: (state: QuotesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: QuotesState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

function transformQuotes(dataObj: any): Quote[] {
  const jsonQuotes = Object.keys(dataObj).map((key) => dataObj[key]);
  return jsonQuotes.map((quoteObj) => {
    const quote: Quote = {
      id: quoteObj.id,
      author: quoteObj.author,
      text: quoteObj.text,
    };
    return quote;
  });
}

export const quoteActions = quotesSlice.actions;

export default quotesSlice;
