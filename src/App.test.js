import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Sample React App heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Sample React App/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('initial counter value is 0', () => {
    render(<App />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('increment button increases counter', () => {
    render(<App />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('decrement button decreases counter', () => {
    render(<App />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const counterElement = screen.getByText(/Counter: -1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('reset button sets counter to 0', () => {
    render(<App />);
    const incrementButton = screen.getByText(/Increment/i);
    const resetButton = screen.getByText(/Reset/i);
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });
});
