import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const Quotes = React.lazy(() => import("./pages/Quotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div>
      <header>
        <MainNavigation />
      </header>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/newQuote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
