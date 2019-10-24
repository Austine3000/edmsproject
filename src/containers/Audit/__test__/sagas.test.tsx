import { runSaga } from 'redux-saga';

import { receiveAduitLogData } from '../redux/actions';

import { getAuditLogData, searchAuditLog } from '../redux/sagas';
import * as api from '../redux/api';

test('Testing get audit log data', async () => {
  const dispatchActions = [];

  const mockedAudit = [
    {
      id: 'S1000',
      eventTime: 'Oct 12, 13:09 pm',
      eventType: 'Delete file',
      status: 'Success',
      user: {
        name: 'Segun Oni',
        department: 'Accounting'
      },
      ipAddress: '193.87.934.1'
    }
  ];
  api.fetchAuditLogData = jest.fn(() => Promise.resolve(mockedAudit));

  const fakeStore = {
    dispatch: action => dispatchActions.push(action)
  };

  await runSaga(fakeStore, getAuditLogData).done;

  expect(api.fetchAuditLogData.mock.calls.length).toBe(1);
  expect(dispatchActions).toContainEqual(receiveAduitLogData(mockedAudit));
});

test('that the search data is returned', async () => {
  const dispatchActions = [];

  const action = {
    department: 'Accounting',
    user: 'Segun Oni',
    status: 'fail'
  };

  const mockedAudit = [
    {
      id: 'S1000',
      eventTime: 'Oct 12, 13:09 pm',
      eventType: 'Delete file',
      status: 'Success',
      user: {
        name: 'Segun Oni',
        department: 'Accounting'
      },
      ipAddress: '193.87.934.1'
    }
  ];
  api.fetchAuditSearchData = jest.fn(() => Promise.resolve(mockedAudit));

  const fakeStore = {
    dispatch: action => dispatchActions.push(action)
  };

  await runSaga(fakeStore, searchAuditLog, action).done;

  expect(api.fetchAuditSearchData.mock.calls.length).toBe(1);
  expect(dispatchActions).toContainEqual(receiveAduitLogData(mockedAudit));
});
