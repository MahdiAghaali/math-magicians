import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handeClick = (event) => {
    setState((testing) => calculate(testing, event.target.textContent));
  };

  return (
    <div className="calculator">
      <span className="display">
        {state.total}
        {state.operation}
        {state.next}
      </span>
      <button type="button" className="button other" onClick={handeClick}>AC</button>
      <button type="button" className="button other" onClick={handeClick}>+/-</button>
      <button type="button" className="button other" onClick={handeClick}>%</button>
      <button type="button" className="button operator" onClick={handeClick}>+</button>
      <button type="button" className="button digit" onClick={handeClick}>1</button>
      <button type="button" className="button digit" onClick={handeClick}>2</button>
      <button type="button" className="button digit" onClick={handeClick}>3</button>
      <button type="button" className="button operator" onClick={handeClick}>-</button>
      <button type="button" className="button digit" onClick={handeClick}>4</button>
      <button type="button" className="button digit" onClick={handeClick}>5</button>
      <button type="button" className="button digit" onClick={handeClick}>6</button>
      <button type="button" className="button operator" onClick={handeClick}>x</button>
      <button type="button" className="button digit" onClick={handeClick}>7</button>
      <button type="button" className="button digit" onClick={handeClick}>8</button>
      <button type="button" className="button digit" onClick={handeClick}>9</button>
      <button type="button" className="button operator" onClick={handeClick}>÷</button>
      <button type="button" className="button digit zero" onClick={handeClick}>0</button>
      <button type="button" className="button other" onClick={handeClick}>.</button>
      <button type="button" className="button operator" onClick={handeClick}>=</button>
    </div>
  );
}
