import React from 'react';
import Button from './Button';
import Display from './Display';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <span className="display">
          {total}
          {operation}
          {next}
        </span>
        <button type="button" className="button other" onClick={this.test}>AC</button>
        <button type="button" className="button other" onClick={this.test}>+/-</button>
        <button type="button" className="button other" onClick={this.test}>%</button>
        <button type="button" className="button operator" onClick={this.test}>+</button>
        <button type="button" className="button digit" onClick={this.test}>1</button>
        <button type="button" className="button digit" onClick={this.test}>2</button>
        <button type="button" className="button digit" onClick={this.test}>3</button>
        <button type="button" className="button operator" onClick={this.test}>-</button>
        <button type="button" className="button digit" onClick={this.test}>4</button>
        <button type="button" className="button digit" onClick={this.test}>5</button>
        <button type="button" className="button digit" onClick={this.test}>6</button>
        <button type="button" className="button operator" onClick={this.test}>x</button>
        <button type="button" className="button digit" onClick={this.test}>7</button>
        <button type="button" className="button digit" onClick={this.test}>8</button>
        <button type="button" className="button digit" onClick={this.test}>9</button>
        <button type="button" className="button operator" onClick={this.test}>/</button>
        <button type="button" className="button digit zero" onClick={this.test}>0</button>
        <button type="button" className="button other" onClick={this.test}>.</button>
        <button type="button" className="button operator" onClick={this.test}>=</button>
      </div>
    );
  }
}
