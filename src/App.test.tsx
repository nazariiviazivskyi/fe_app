import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App Component', () => {
  it('renders the app with correct heading', () => {
    render(<App />);
    expect(screen.getByText('React + Material UI + Vite')).toBeInTheDocument();
  });

  it('displays initial count as 0', () => {
    render(<App />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders increment button', () => {
    render(<App />);
    expect(screen.getByText('Increment')).toBeInTheDocument();
  });

  it('renders decrement button', () => {
    render(<App />);
    expect(screen.getByText('Decrement')).toBeInTheDocument();
  });

  it('renders reset button', () => {
    render(<App />);
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByText('Increment');
    await user.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    await user.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();

    await user.click(decrementButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('resets count to 0 when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');

    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    await user.click(resetButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders the Getting Started card', () => {
    render(<App />);
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
  });

  it('renders the Counter Example card', () => {
    render(<App />);
    expect(screen.getByText('Counter Example')).toBeInTheDocument();
  });

  it('renders links to Material-UI and Vite', () => {
    render(<App />);
    expect(screen.getByText('Material-UI')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
  });
});
