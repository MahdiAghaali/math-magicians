import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { displayText } = props;
  return (
    <div className="display">
      {displayText}
    </div>
  );
};

Display.defaultProps = {
  displayText: 0,
};

Display.propTypes = {
  displayText: PropTypes.string,
};

export default Display;
