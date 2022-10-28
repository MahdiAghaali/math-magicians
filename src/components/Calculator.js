import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.test = this.test.bind(this);
  }

  test(event) {
    this.setState((testing) => calculate(testing, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
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
