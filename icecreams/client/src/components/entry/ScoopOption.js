import React from 'react';

const ScoopOption = ({ name, imagePath }) => {
  return (
    <div>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        className="scoop-option__img"
      />
    </div>
  );
};

export default ScoopOption;
