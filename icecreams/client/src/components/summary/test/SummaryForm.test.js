import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(submitButton).toBeEnabled();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  test('Hovering over the terms and conditions shows popover', async () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText('Here is some text');
    expect(nullPopover).not.toBeInTheDocument();
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText('Here is some text');
    expect(popover).toBeInTheDocument();
    userEvent.unhover(termsAndConditions);
    // When async stuff happens, test finishes too early, so we use waitForElement
    // This acts as an assertion on its own.
    // await waitForElementToBeRemoved(() =>
    //   screen.queryByText('Here is some text')
    // );
    const nullPopoverAgain = screen.queryByText('Here is some text');
    expect(nullPopoverAgain).not.toBeInTheDocument();
  });
});
