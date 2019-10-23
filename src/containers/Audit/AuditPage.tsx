import React from "react";
const OverviewContent = React.lazy(() => import("./AuditContent"));

export default function OverviewPage(props: any): JSX.Element {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <OverviewContent />
      </React.Suspense>
    </React.Fragment>
  );
}
