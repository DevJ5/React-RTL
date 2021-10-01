import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

// To render one component: render(<Component/>, {wrapper: OrderDetailsProvider})
// To render every component with provider:
const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
