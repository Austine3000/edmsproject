import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OverviewPage from "./containers/Overview/OverviewPage";

import ErrorBoundary from "./common/ErrorBoundary";

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={OverviewPage} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
