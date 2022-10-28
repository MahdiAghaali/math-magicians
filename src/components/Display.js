import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { displayText } = this.props;
    return (
      <div className="display">
        {displayText}
      </div>
    );
  }
}

Display.defaultProps = {
  displayText: 0,
};

Display.propTypes = {
  displayText: PropTypes.string,
};

export default Display;
