import { combineReducers } from 'redux';

import auditLog from '../containers/Audit/redux/reducer';

const reducers = combineReducers({
  auditLog
});

export default reducers;
