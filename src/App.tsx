import React from "react";
import { Route, Switch } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <header>
        <MainNavigation />
      </header>
      <Switch>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/newQuote">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
