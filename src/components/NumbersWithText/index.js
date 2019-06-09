import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const NumbersWithText = ({ numbers, text }) => (
  <div className="numtext-indicator">
    {numbers.map(num => (
      <div className="numtext-indicator__number">{num}</div>
    ))}
    <div className="numtext-indicator__city">{text}</div>
  </div>
)

NumbersWithText.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  text: PropTypes.string,
}

NumbersWithText.defaultProps = {
  numbers: [],
  text: ''
}

export default NumbersWithText;
