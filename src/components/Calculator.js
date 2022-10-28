import React from 'react';
import Button from './Button';
import Display from './Display';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Button displayText="AC" type="other" />
        <Button displayText="+/-" type="other" />
        <Button displayText="%" type="other" />
        <Button displayText="+" type="operator" />
        <Button displayText="1" type="digit" />
        <Button displayText="2" type="digit" />
        <Button displayText="3" type="digit" />
        <Button displayText="-" type="operator" />
        <Button displayText="4" type="digit" />
        <Button displayText="5" type="digit" />
        <Button displayText="6" type="digit" />
        <Button displayText="x" type="operator" />
        <Button displayText="7" type="digit" />
        <Button displayText="8" type="digit" />
        <Button displayText="9" type="digit" />
        <Button displayText="/" type="operator" />
        <Button displayText="0" type="digit zero" />
        <Button displayText="." type="other" />
        <Button displayText="=" type="operator" />
      </div>
    );
  }
}
