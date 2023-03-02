import React from 'react';
import { render } from '@testing-library/react';
import DataTable from '../DataTable';

describe('DataTable component', () => {
  const data = [
    {
      file: 'file1.txt',
      lines: [
        {
          text: 'line 1',
          number: 1,
          hex: '0x123',
        },
        {
          text: 'line 2',
          number: 2,
          hex: '0x456',
        },
      ],
    },
    {
      file: 'file2.txt',
      lines: [
        {
          text: 'line 1',
          number: 1,
          hex: '0x789',
        },
      ],
    },
  ];

  test('renders the correct table', () => {
    const { getByText } = render(<DataTable data={data} />);
    expect(getByText('#')).toBeInTheDocument();
    expect(getByText('File name')).toBeInTheDocument();
    expect(getByText('Text')).toBeInTheDocument();
    expect(getByText('Number')).toBeInTheDocument();
    expect(getByText('Hex')).toBeInTheDocument();
  });
});