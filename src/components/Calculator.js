import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handeClick = (event) => {
    setState((testing) => calculate(testing, event.target.textContent));
  };

  const buttons = [
    { value: 'AC', class: 'button other AC' },
    { value: '+/-', class: 'button other' },
    { value: '%', class: 'button other' },
    { value: '÷', class: 'button operator' },
    { value: '7', class: 'button digit' },
    { value: '8', class: 'button digit' },
    { value: '9', class: 'button digit' },
    { value: 'x', class: 'button operator' },
    { value: '4', class: 'button digit' },
    { value: '5', class: 'button digit' },
    { value: '6', class: 'button digit' },
    { value: '-', class: 'button operator' },
    { value: '1', class: 'button digit' },
    { value: '2', class: 'button digit' },
    { value: '3', class: 'button digit' },
    { value: '+', class: 'button operator' },
    { value: '0', class: 'button digit zero' },
    { value: '.', class: 'button other' },
    { value: '=', class: 'button operator' },
  ];

  return (
    <div className="calculator">
      <span className="display">
        {state.total}
        {state.operation}
        {state.next}
      </span>
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          buttonValue={btn.value}
          buttonClass={btn.class}
          handeClick={handeClick}
        />
      ))}
    </div>
  );
}
