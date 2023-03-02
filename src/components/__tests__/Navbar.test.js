import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  test('renders the correct text', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('React Test App')).toBeInTheDocument();
    expect(getByText('By Jaime Gaona - Software Developer')).toBeInTheDocument();
  });
});
