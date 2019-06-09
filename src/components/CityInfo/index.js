import React from 'react';
import PropTypes from 'prop-types';
import WeatherIndicator from '../WeatherIndicator';
import NumbersWithText from '../NumbersWithText';
import IconItem from '../IconItem';

import './styles.scss';

const CityInfo = ({
  cityInfo: {
    cityName,
    sunriseDate,
    sunsetDate,
    currentTemp,
    tempUnit,
    weatherIcon,
    weatherDesc
  } 
}) => (
  <div className="city-info">
    <WeatherIndicator
      className="city-info__indicator"
      iconName={weatherIcon}
      desc={weatherDesc} />
    <NumbersWithText
      className="city-info__clock"
      numbers={[18, 20]} text={cityName} />
    <div className="city-info__etc">
      <IconItem className="city-info__temp" iconName="wi-thermometer">{`${currentTemp}${tempUnit}`}</IconItem>
      <IconItem iconName="wi-sunrise">{sunriseDate}</IconItem>
      <IconItem iconName="wi-sunset">{sunsetDate}</IconItem>
    </div>
  </div>
)

CityInfo.propTypes = {
  cityInfo: PropTypes.shape({
    cityName: PropTypes.string,
    sunriseDate: PropTypes.string,
    sunsetDate: PropTypes.string,
    currentTemp: PropTypes.string,
    tempUnit: PropTypes.string,
    weatherIcon: PropTypes.string,
    weatherDesc: PropTypes.string
  }),
}

CityInfo.defaultProps = {
  cityInfo: {
    cityName: '...',
    sunriseDate: '...',
    sunsetDate: '...',
    currentTemp: '...',
    tempUnit: '...',
    weatherIcon: '...',
    weatherDesc: '...',
  },
}

export default CityInfo;