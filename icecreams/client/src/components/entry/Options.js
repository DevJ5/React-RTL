import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log('hi'));
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <div>
      <h3>Scoops</h3>
      <p>$2.00 each</p>
      <div className="options">{optionItems}</div>
    </div>
  );
};

export default Options;
