import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from '../Counter';

let counterComponent;
beforeEach(() => {
  counterComponent = render(<Counter />);
});

afterEach(() => {
  cleanup();
});

beforeAll(() => {});

afterAll(() => {});

test('header renders with correct text', () => {
  // const headerEl = counterComponent.getByTestId('header');
  const headerEl = counterComponent.getByRole('heading', { level: 1 });
  expect(headerEl.textContent).toBe('My counter');
});

test('counter initially starts at 0', () => {
  // const countEl = counterComponent.getByTestId('counter__count');
  const countEl = counterComponent.getByLabelText('count');
  expect(countEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  // const inputEl = counterComponent.getByTestId('counter__input');
  const inputEl = counterComponent.getByRole('spinbutton');
  expect(inputEl.value).toBe('1');
});

test('add button renders with +', () => {
  // const addBtnEl = counterComponent.getByTestId('counter__add-btn');
  const addBtnEl = counterComponent.getByRole('button', { name: '+' });
  expect(addBtnEl.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  // const subtractBtnEl = counterComponent.getByTestId('counter__subtract-btn');
  const subtractBtnEl = counterComponent.getByRole('button', { name: /-/ });
  expect(subtractBtnEl.textContent).toBe('-');
});

test('change value of input works correctly', () => {
  const inputEl = counterComponent.getByTestId('counter__input');
  userEvent.clear(inputEl);
  userEvent.type(inputEl, '2');
  // fireEvent.change(inputEl, {
  //   target: { value: '2' },
  // });
  expect(inputEl.value).toBe('2');
});

test('pressing the + button increases the counter by the input value', () => {
  const inputEl = counterComponent.getByTestId('counter__input');
  const addBtnEl = counterComponent.getByRole('button', { name: '+' });
  const countEl = counterComponent.getByLabelText('count');

  userEvent.clear(inputEl);
  userEvent.type(inputEl, '5');
  userEvent.click(addBtnEl);
  expect(countEl.textContent).toBe('5');
});

test('pressing the - button decreases the counter by the input value', () => {
  const inputEl = counterComponent.getByTestId('counter__input');
  const subtractBtnEl = counterComponent.getByRole('button', { name: /-/ });
  const countEl = counterComponent.getByLabelText('count');

  userEvent.clear(inputEl);
  userEvent.type(inputEl, '5');
  userEvent.click(subtractBtnEl);
  expect(countEl.textContent).toBe('-5');
});

test('counter contains the correct className attribute', () => {
  const inputEl = counterComponent.getByTestId('counter__input');
  const addBtnEl = counterComponent.getByRole('button', { name: '+' });
  const subtractBtnEl = counterComponent.getByRole('button', { name: /-/ });
  const countEl = counterComponent.getByLabelText('count');

  userEvent.clear(inputEl);
  userEvent.type(inputEl, '100');
  userEvent.click(addBtnEl);
  expect(countEl.className).toBe('counter__count counter__count--green');

  userEvent.click(subtractBtnEl);
  expect(countEl.textContent).toBe('0');
  userEvent.click(subtractBtnEl);
  expect(countEl.className).toBe('counter__count counter__count--red');
});
