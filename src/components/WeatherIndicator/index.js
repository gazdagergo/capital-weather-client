import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.scss';

const WeatherIndicator = ({ className, iconName, desc }) => (
  <div className={cx('wx-indicator', className)}>
    <i className={cx('wi', iconName)}></i>
    <span>{desc}</span>
  </div>
)

WeatherIndicator.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

WeatherIndicator.defaultProps = {
  className: '',
  desc: null
}

export default WeatherIndicator;