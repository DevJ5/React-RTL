import React from 'react';

const ToppingOption = ({ name, imagePath }) => {
  return (
    <div>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        className="topping-option__img"
      />
    </div>
  );
};

export default ToppingOption;
