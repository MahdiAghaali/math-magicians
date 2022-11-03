import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handeClick = this.handeClick.bind(this);
  }

  handeClick(e) {
    const { handeClick } = this.props;
    handeClick(e.target.innerHTML);
  }

  render() {
    const { buttonValue, buttonClass, handeClick } = this.props;
    return (
      <button type="button" className={buttonClass} onClick={handeClick}>{buttonValue}</button>
    );
  }
}

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  handeClick: PropTypes.func.isRequired,
};

export default Button;
