import {
  REQUEST_AUDIT_LOG_DATA,
  RECEIVE_AUDIT_LOG_DATA,
  SEARCH_AUDIT_LOG_DATA
} from './types';

export const requestAduitLogData = () => {
  return { type: REQUEST_AUDIT_LOG_DATA };
};
export const receiveAduitLogData = (data: any) => {
  return {
    type: RECEIVE_AUDIT_LOG_DATA,
    data
  };
};

export const searchAuditLogData = (data: any) => {
  return {
    type: SEARCH_AUDIT_LOG_DATA,
    data
  };
};
