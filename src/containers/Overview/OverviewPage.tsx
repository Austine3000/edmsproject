import React from "react";
const OverviewContent = React.lazy(() => import("./OverviewContent"));

export default function OverviewPage(props: any): JSX.Element {
  return (
    <React.Fragment>
      <OverviewContent />
    </React.Fragment>
  );
}
