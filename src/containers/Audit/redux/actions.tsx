import { REQUEST_AUDIT_LOG_DATA, RECEIVE_AUDIT_LOG_DATA } from './types';
export const requestAduitLogData = () => ({ type: REQUEST_AUDIT_LOG_DATA });
export const receiveAduitLogData = (data: any) => ({
  type: RECEIVE_AUDIT_LOG_DATA,
  data
});
