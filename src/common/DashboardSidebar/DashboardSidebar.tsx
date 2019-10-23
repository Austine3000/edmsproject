import React from "react";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";

import "./DashboardSidebar.scss";

export default function DashboardSidebar(props: any): JSX.Element {
  return (
    <React.Fragment>
      <section id="side-menu">
        <div className="user-details">
          <div className="avatar">
            <span className="avatar-frame">
              <img src="assets/avatar.svg" alt="avatar" />
            </span>
          </div>
          <div className="user-details-info">
            <p className="user-name">Jaohn Samue</p>
            <p className="user-role">Front Desk Officer</p>
            <small>Finance</small>
          </div>
        </div>
        <DashboardNavigation />
      </section>
    </React.Fragment>
  );
}
