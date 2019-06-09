import React from 'react';
import PropTypes from 'prop-types';
import WeatherIndicator from '../WeatherIndicator';
import NumbersWithText from '../NumbersWithText';
import IconItem from '../IconItem';

import './styles.scss';

const CityInfo = ({ cityName }) => (
  <div className="city-info">
    <WeatherIndicator
      className="city-info__indicator"
      iconName="wi-day-fog"
      desc="cloudy" />
    <NumbersWithText
      className="city-info__clock"
      numbers={[18, 20]} text={cityName} />
    <div className="city-info__etc">
      <IconItem className="city-info__temp" iconName="wi-thermometer">10˚C</IconItem>
      <IconItem iconName="wi-sunrise">6:00</IconItem>
      <IconItem iconName="wi-sunset">18:00</IconItem>
    </div>
  </div>
)

CityInfo.propTypes = {
  cityName: PropTypes.string,
}

CityInfo.defaultProps = {
  cityName: '',
}

export default CityInfo;