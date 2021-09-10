import React from 'react';
import Options from './Options';

const OrderEntry = () => {
  return (
    <React.Fragment>
      <h1>Design Your Sundae!</h1>

      <div className="row-flex">
        <Options optionType="scoops"></Options>
        <Options optionType="toppings"></Options>

        <h3>Grand total: $10.50</h3>
        <button>Order Sundae!</button>
      </div>
    </React.Fragment>
  );
};

export default OrderEntry;
