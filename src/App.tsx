import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OverviewPage from "./containers/Audit/AuditPage";
import DashboardSidebar from "./common/DashboardSidebar/DashboardSidebar";

import ErrorBoundary from "./common/ErrorBoundary";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="dashboard-body">
        <DashboardSidebar />
        <section id="content-area">
          <Router>
            <Switch>
              <Route exact path="/" component={OverviewPage} />
            </Switch>
          </Router>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default App;
