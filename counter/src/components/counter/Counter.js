import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const onAddClick = () => {
    setCount(count + inputValue);
  };

  const onSubtractClick = () => {
    setCount(count - inputValue);
  };

  const countClass = () => {
    if (count >= 100) return 'counter__count--green';
    if (count <= -100) return 'counter__count--red';
  };

  return (
    <div className="counter">
      <h1 data-testid="header" className="counter__header">
        My counter
      </h1>
      <p
        className={`counter__count ${countClass()}`}
        data-testid="counter__count"
        aria-label="count">
        {count}
      </p>
      <button
        className="counter__subtract-btn"
        data-testid="counter__subtract-btn"
        onClick={onSubtractClick}>
        -
      </button>
      <input
        type="number"
        className="counter__input"
        data-testid="counter__input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value) || e.target.value);
        }}
      />
      <button
        className="counter__add-btn"
        data-testid="counter__add-btn"
        onClick={onAddClick}>
        +
      </button>
    </div>
  );
};

export default Counter;
