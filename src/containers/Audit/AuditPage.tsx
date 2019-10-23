import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestAduitLogData } from './redux/actions';
const AuditContent = React.lazy(() => import('./AuditContent'));

function AuditPage(props: any): JSX.Element {
  const { getAuditHandler, audits } = props;

  useEffect(() => {
    getAuditHandler();
  }, [getAuditHandler]);
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AuditContent audits={audits} />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAuditHandler: () => dispatch(requestAduitLogData())
  };
};

const mapStateToProps = (state: any) => {
  return {
    audits: state.auditLog.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditPage);
