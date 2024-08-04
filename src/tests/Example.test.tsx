import Example from '@components/atoms/Example';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Rendered correctly', () => {
  test('check if heading h1 rendred correctly', () => {
    render(<Example />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
