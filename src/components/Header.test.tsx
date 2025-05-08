import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock the SVG import
jest.mock('../assets/slalom-logo.svg', () => 'slalom-logo.svg');

describe('Header Component', () => {
  test('renders the Slalom logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText(/slalom logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the navigation links', () => {
    render(<Header />);
    const aiAdvancesLink = screen.getByText(/ai advances/i);
    const useCasesLink = screen.getByText(/use cases/i);
    
    expect(aiAdvancesLink).toBeInTheDocument();
    expect(useCasesLink).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Header />);
    const aiAdvancesLink = screen.getByText(/ai advances/i);
    const useCasesLink = screen.getByText(/use cases/i);
    
    expect(aiAdvancesLink).toHaveAttribute('href', '#advances');
    expect(useCasesLink).toHaveAttribute('href', '#use-cases');
  });
});