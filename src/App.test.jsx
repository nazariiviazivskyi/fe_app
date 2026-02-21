import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App Component', () => {
  it('renders the app with correct heading', () => {
    render(<App />);
    expect(screen.getByText('React App')).toBeInTheDocument();
  });

  it('displays initial count as 0', () => {
    render(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByText(/count is/i);
    await user.click(button);

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  it('increments count multiple times', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByText(/count is/i);
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByText(/count is 3/i)).toBeInTheDocument();
  });

  it('renders the HMR message', () => {
    render(<App />);
    expect(screen.getByText('src/App.jsx')).toBeInTheDocument();
    expect(screen.getByText(/and save to test HMR/i)).toBeInTheDocument();
  });
});
