import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UseCases from './UseCases';

describe('UseCases Component', () => {
  test('renders the UseCases component with heading', () => {
    render(<UseCases />);
    const headingElement = screen.getByText(/Transformative Use Cases/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the Education use case when its button is clicked', () => {
    render(<UseCases />);
    
    // Click on the Education industry button
    const educationButton = screen.getByText(/Education/i);
    fireEvent.click(educationButton);
    
    // Check if the title is displayed
    const titleElement = screen.getByText(/Adaptive Learning Content/i);
    expect(titleElement).toBeInTheDocument();
    
    // Check if the description with the apostrophe is displayed correctly
    const descriptionText = "Generative AI that creates personalized educational materials and exercises based on individual student's learning style, pace, and areas needing improvement.";
    const descriptionElement = screen.getByText(descriptionText);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the benefits list for the selected use case', () => {
    render(<UseCases />);
    
    // Click on the Education industry button
    const educationButton = screen.getByText(/Education/i);
    fireEvent.click(educationButton);
    
    // Check if benefits are displayed
    const benefit1 = screen.getByText(/Addresses diverse learning needs in the classroom/i);
    const benefit2 = screen.getByText(/Provides immediate, constructive feedback/i);
    const benefit3 = screen.getByText(/Helps teachers identify and address learning gaps/i);
    
    expect(benefit1).toBeInTheDocument();
    expect(benefit2).toBeInTheDocument();
    expect(benefit3).toBeInTheDocument();
  });
});