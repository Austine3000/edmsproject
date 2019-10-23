import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const DashboardNavigation: React.FC = (props: any) => {
  return (
    <nav>
      <Router>
        <NavLink to="/">
          <img src="assets/dashboard.svg" alt="user-img" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/audit-log">
          <img src="assets/audit-log.svg" alt="user-img" />
          <span>Audit Log</span>
        </NavLink>
        <NavLink to="/Settings">
          <img src="assets/settings.svg" alt="user-img" />
          <span>Settings</span>
        </NavLink>
      </Router>
    </nav>
  );
};

export default DashboardNavigation;
