import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AuditPage from '../AuditPage';

const mockStore = configureStore([]);

describe('My test for audit page', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auditLog: {
        data: []
      }
    });
  });
  const renderComponent = () => {
    return render(
      <Provider store={store}>
        <AuditPage />
      </Provider>
    );
  };

  test('Checks if the audit page is mounted', () => {
    renderComponent();
  });
});
