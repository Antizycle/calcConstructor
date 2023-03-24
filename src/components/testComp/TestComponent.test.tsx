import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestComponent } from './TestComponent';

it('renders TestComponent', () => {
  render(<TestComponent/>);
  const testElem = screen.getByText('TestText');
  expect(testElem).toBeInTheDocument();
});