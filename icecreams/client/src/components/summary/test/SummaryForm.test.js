import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Summary Form works as expected', () => {
  test('Checkbox is unchecked by default', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
  test('Checking/Unchecking the checkbox enables/disables submit button', () => {
    render(<SummaryForm />);
    const submitButton = screen.getByRole('button', { name: 'Confirm order' });
    const checkbox = screen.getByRole('checkbox');

    expect(submitButton).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(submitButton).toBeEnabled();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  test('Hovering over the terms and conditions shows popover', () => {
    // render form
    // grab reference to terms and conditions
    // grab reference to parentDIV
    // popover is not shown in DOM
    // mock hover event
    // popover is shown in DOM
  });
});
