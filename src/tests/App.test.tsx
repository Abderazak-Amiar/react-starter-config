import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Rendered correctly', () => {
  test('check if heading h1 rendred correctly', () => {
    render(<App />);
    const greeting = screen.getByRole('heading');
    const azul = screen.getByText('Azul');
    expect(greeting).toBeInTheDocument();
    expect(azul).toBeInTheDocument();
  });

  test('check if Azul rendred correctly', () => {
    render(<App />);
    const azul = screen.getByText('Azul');
    expect(azul).toBeInTheDocument();
  });
});
