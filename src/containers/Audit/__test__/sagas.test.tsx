import { runSaga } from 'redux-saga';

import { receiveAduitLogData } from '../redux/actions';

import { getAuditLogData, searchAuditLog } from '../redux/sagas';
import * as api from '../redux/api';

test('Testing get audit log data', async () => {
  const dispatchActions: any = [];

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
  (api.fetchAuditLogData as any) = jest.fn(() => Promise.resolve(mockedAudit));

  const fakeStore = {
    dispatch: (action: any) => dispatchActions.push(action)
  };

  await (runSaga(fakeStore, getAuditLogData) as any).done;

  expect((api.fetchAuditLogData as any).mock.calls.length).toBe(1);
  expect(dispatchActions).toContainEqual(receiveAduitLogData(mockedAudit));
});

test('that the search data is returned', async () => {
  const dispatchActions: any = [];

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

  (api.fetchAuditSearchData as any) = jest.fn(() =>
    Promise.resolve(mockedAudit)
  );

  const fakeStore = {
    dispatch: (action: any) => dispatchActions.push(action)
  };

  await (runSaga(fakeStore, searchAuditLog, action) as any).done;

  expect((api.fetchAuditLogData as any).mock.calls.length).toBe(1);
  expect(dispatchActions).toContainEqual(receiveAduitLogData(mockedAudit));
});
