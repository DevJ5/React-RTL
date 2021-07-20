import { render, screen } from '@testing-library/react';
import Counter from '../Counter';

test('header renders with correct text', () => {
  const counterComponent = render(<Counter />);
  const headerEl = counterComponent.getByTestId('header');
  expect(headerEl.textContent).toBe('My counter');
});

test('counter initially starts at 0', () => {
  const counterComponent = render(<Counter />);
  const countEl = counterComponent.getByTestId('counter__count');
  expect(countEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  const counterComponent = render(<Counter />);
  const inputEl = counterComponent.getByTestId('counter__input');
  expect(inputEl.value).toBe('1');
});

test('add button renders with +', () => {
  const counterComponent = render(<Counter />);
  const addBtnEl = counterComponent.getByTestId('counter__add-btn');
  expect(addBtnEl.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const counterComponent = render(<Counter />);
  const subtractBtnEl = counterComponent.getByTestId('counter__subtract-btn');
  expect(subtractBtnEl.textContent).toBe('-');
});

test('change value of input works correctly', () => {
  const counterComponent = render(<Counter />);
  const inputEl = counterComponent.getByTestId('counter__input');
});
