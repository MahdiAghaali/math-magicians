import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { displayText, type } = this.props;
    const classes = `button ${type}`;
    return (
      <div className={classes}>
        {displayText}
      </div>
    );
  }
}

Button.propTypes = {
  displayText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
