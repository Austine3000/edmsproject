import { RECEIVE_AUDIT_LOG_DATA } from './types';

const initialState = {
  data: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case RECEIVE_AUDIT_LOG_DATA:
      return action.data;
    default:
      return state;
  }
};
