import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { displayText, type } = props;
  const classes = `button ${type}`;
  return (
    <div className={classes}>
      {displayText}
    </div>
  );
};

Button.propTypes = {
  displayText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
