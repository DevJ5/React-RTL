import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to /i });
  expect(colorButton).toBeInTheDocument();
  expect(colorButton).toHaveStyle({ backgroundColor: 'OrangeRed' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton.textContent).toBe('Change to Lime Green');

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'LimeGreen' });
  expect(colorButton.textContent).toBe('Change to Orange Red');
});

test('initial checkbox conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to /i });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('when checkbox is checked, button is disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  const colorButton = screen.getByRole('button', { name: /change to /i });
  expect(colorButton).toBeDisabled();
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
