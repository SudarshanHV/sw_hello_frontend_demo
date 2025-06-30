import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// Mock Date for consistent testing
const mockDate = (hour) => {
  const mockDateObj = new Date();
  mockDateObj.setHours(hour);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDateObj);
};

describe('Greeting Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders with default name when no name provided', () => {
    render(<Greeting />);
    expect(screen.getByText(/world/i)).toBeInTheDocument();
  });

  test('renders with custom name when provided', () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText(/alice/i)).toBeInTheDocument();
  });

  test('displays good morning greeting in the morning', () => {
    mockDate(10); // 10 AM
    render(<Greeting name="Bob" />);
    expect(screen.getByText(/good morning, bob/i)).toBeInTheDocument();
  });

  test('displays good afternoon greeting in the afternoon', () => {
    mockDate(14); // 2 PM
    render(<Greeting name="Charlie" />);
    expect(screen.getByText(/good afternoon, charlie/i)).toBeInTheDocument();
  });

  test('displays good evening greeting in the evening', () => {
    mockDate(20); // 8 PM
    render(<Greeting name="Diana" />);
    expect(screen.getByText(/good evening, diana/i)).toBeInTheDocument();
  });

  test('renders welcome message', () => {
    render(<Greeting />);
    expect(screen.getByText(/welcome to our react application/i)).toBeInTheDocument();
  });
});