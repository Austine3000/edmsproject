import AuditReducer from '../redux/reducer';

test('fetch audit data', () => {
  const state = {
    data: []
  };

  const action = {
    type: 'RECEIVE_AUDIT_LOG_DATA',
    data: [{ department: 'Accounting' }]
  };

  const data = AuditReducer(state, action);
  expect(data[0].department).toBe('Accounting');
});
