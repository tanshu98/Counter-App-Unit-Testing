import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders the counter component", ()=> {
  render(<App />);
  const counterElement = screen.getByTestId('count');
  expect(counterElement).toBeInTheDocument();
});