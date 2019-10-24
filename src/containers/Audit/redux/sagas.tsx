import { call, put, takeLatest } from 'redux-saga/effects';

import { receiveAduitLogData } from './actions';
import { REQUEST_AUDIT_LOG_DATA, SEARCH_AUDIT_LOG_DATA } from './types';
import { fetchAuditLogData, fetchAuditSearchData } from './api';

export function* getAuditLogData() {
  try {
    // do api call
    const data = yield call(fetchAuditLogData);
    yield put(receiveAduitLogData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchAuditLog(action: any) {
  try {
    // do api call
    const data = yield call(fetchAuditSearchData, action.data);
    yield put(receiveAduitLogData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* auditSagas() {
  yield takeLatest(REQUEST_AUDIT_LOG_DATA, getAuditLogData);
}

export function* auditsearchSagas() {
  yield takeLatest(SEARCH_AUDIT_LOG_DATA, searchAuditLog);
}
