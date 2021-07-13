import React, { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState('OrangeRed');
  const [disabled, setDisabled] = useState(false);

  const renderButton = () => {
    const colors = ['OrangeRed', 'MidnightBlue', 'LimeGreen'];
    const index = colors.indexOf(color);

    let newColor = colors[index + 1];
    if (colors.length - 1 === index) newColor = colors[0];

    return (
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}>
        Change to {replaceCamelWithSpaces(newColor)}
      </button>
    );
  };

  return (
    <div className="container">
      {renderButton()}
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onClick={(e) => setDisabled(e.target.checked)}
        aria-checked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disable</label>
    </div>
  );
}

export default App;
