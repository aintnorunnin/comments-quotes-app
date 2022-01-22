import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./Quotes/quotes-slice";

const store = configureStore({
  reducer: {
    quotes: quotesSlice.reducer,
  },
});

export default store;
