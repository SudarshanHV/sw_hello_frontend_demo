import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders hello react app heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/hello react app/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders greeting with default name', () => {
    render(<App />);
    const greetingElement = screen.getByText(/world/i);
    expect(greetingElement).toBeInTheDocument();
  });

//   test('updates greeting when name input changes', () => {
//     render(<App />);
//     const nameInput = screen.getByLabelText(/change greeting name/i);

//     fireEvent.change(nameInput, { target: { value: 'React' } });

//     // Flexible match for any time-based greeting
//     expect(
//         screen.getByText(/good (morning|afternoon|evening), react!/i)
//     ).toBeInTheDocument();
//   });

  test('renders counter component', () => {
    render(<App />);
    const counterElement = screen.getByText(/counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('renders footer text', () => {
    render(<App />);
    const footerElement = screen.getByText(/built with react/i);
    expect(footerElement).toBeInTheDocument();
  });
});