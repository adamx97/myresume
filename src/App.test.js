import { render, screen } from '@testing-library/react';
import App from './App';

test('renders top menu butttons', () => {
  render(<App />);
  //const Element = screen.getByText(/products/i, { selector: 'a' });
  const Elements = screen.getAllByRole('button');
  //expect(Element).toBeInTheDocument();
  expect(Elements.length).toBeGreaterThan(0);
});
