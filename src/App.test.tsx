import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header with Slalom logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/slalom logo/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders hero section with heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Generative AI/i);
  expect(headingElement).toBeInTheDocument();
});