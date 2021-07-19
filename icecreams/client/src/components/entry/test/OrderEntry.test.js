import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import { expect } from '@jest/globals';

test.only('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);
  // Wait for is used because without it, the await findAll would not wait for both alert banners to
  // be present in the DOM. It sees one and thinks the async call is done.
  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});

test('this test wont run', () => {});
test.skip('this test wont run either', () => {});
