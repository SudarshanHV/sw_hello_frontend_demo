import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders counter with initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  test('increments counter when increase button is clicked', () => {
    render(<Counter />);
    const increaseButton = screen.getByText(/increase/i);
    
    fireEvent.click(increaseButton);
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
    
    fireEvent.click(increaseButton);
    expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();
  });

  test('decrements counter when decrease button is clicked', () => {
    render(<Counter />);
    const increaseButton = screen.getByText(/increase/i);
    const decreaseButton = screen.getByText(/decrease/i);
    
    // First increase to 2
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();
    
    // Then decrease to 1
    fireEvent.click(decreaseButton);
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
  });

  test('decrease button is disabled when counter is 0', () => {
    render(<Counter />);
    const decreaseButton = screen.getByText(/decrease/i);
    
    expect(decreaseButton).toBeDisabled();
  });

  test('decrease button is enabled when counter is greater than 0', () => {
    render(<Counter />);
    const increaseButton = screen.getByText(/increase/i);
    const decreaseButton = screen.getByText(/decrease/i);
    
    fireEvent.click(increaseButton);
    expect(decreaseButton).not.toBeDisabled();
  });

  test('resets counter to 0 when reset button is clicked', () => {
    render(<Counter />);
    const increaseButton = screen.getByText(/increase/i);
    const resetButton = screen.getByText(/reset/i);
    
    // Increase counter first
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(screen.getByText(/counter: 3/i)).toBeInTheDocument();
    
    // Reset to 0
    fireEvent.click(resetButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  test('renders all three buttons', () => {
    render(<Counter />);
    
    expect(screen.getByText(/decrease/i)).toBeInTheDocument();
    expect(screen.getByText(/reset/i)).toBeInTheDocument();
    expect(screen.getByText(/increase/i)).toBeInTheDocument();
  });
});