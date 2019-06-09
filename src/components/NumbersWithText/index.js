import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.scss';

const NumbersWithText = ({ numbers, text, className }) => (
  <div className={cx('num-text', className)}>
    {numbers.map(num => (
      <div className="num-text__number">{num}</div>
    ))}
    <div className="num-text__text">{text}</div>
  </div>
)

NumbersWithText.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  text: PropTypes.string,
  className: PropTypes.string,
}

NumbersWithText.defaultProps = {
  numbers: [],
  text: '',
  className: ''
}

export default NumbersWithText;
