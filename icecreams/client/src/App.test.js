import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders', async () => {
  render(<App />);
  // To fix "Cannot log after tests are done."
  await screen.findAllByRole('img', { name: /scoop$/ });
});
