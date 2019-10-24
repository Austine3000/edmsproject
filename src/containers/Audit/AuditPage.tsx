import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { requestAduitLogData, searchAuditLogData } from './redux/actions';
const AuditContent = React.lazy(() => import('./AuditContent'));

type FormElem = React.FormEvent<HTMLFormElement>;

function AuditPage(props: any): JSX.Element {
  const { getAuditHandler, audits, searchAuditHandler } = props;
  const auditSearchDetail = {
    department: '',
    user: '',
    status: '',
    startDate: '',
    endDate: ''
  };
  const [auditSearch, setaduit] = useState(auditSearchDetail);

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setaduit({ ...auditSearch, [name]: value });
  };

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    searchAuditHandler(auditSearch);
  };

  const handleClear = (e: FormElem): void => {
    e.preventDefault();
    setaduit(auditSearchDetail);
  };

  useEffect(() => {
    getAuditHandler();
  }, [getAuditHandler]);
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AuditContent
          audits={audits}
          auditSearch={auditSearch}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />
      </React.Suspense>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAuditHandler: () => dispatch(requestAduitLogData()),
    searchAuditHandler: (payload: any) => dispatch(searchAuditLogData(payload))
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
