import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="counter">
      <h1 data-testid="header" className="counter__header">
        My counter
      </h1>
      <p className="counter__count" data-testid="counter__count">
        {count}
      </p>
      <button className="counter__add-btn" data-testid="counter__add-btn">
        +
      </button>
      <input
        type="number"
        className="counter__input"
        data-testid="counter__input"
        value={inputValue}
      />
      <button
        className="counter__subtract-btn"
        data-testid="counter__subtract-btn">
        -
      </button>
    </div>
  );
};

export default Counter;
