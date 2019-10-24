import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AuditContent from '../AuditContent';

const renderComponent = () => {
  const audits = [
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

  const auditSearch = {
    department: '',
    user: '',
    status: '',
    startDate: '',
    endDate: ''
  };
  const handleChange = jest.fn();
  return render(
    <AuditContent
      audits={audits}
      auditSearch={auditSearch}
      handleChange={handleChange}
    />
  );
};

test('Checks if the shipment info page is mounted', () => {
  renderComponent();
});

test('Check if input fields are working', () => {
  const { getByLabelText, getByText } = renderComponent();

  fireEvent.change(getByLabelText(/Department/i), {
    target: { value: 'Accounting' }
  });
});
