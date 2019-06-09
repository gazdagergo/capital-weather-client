import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import WeatherInicator from '../WeatherInicator';
import NumbersWithText from '../NumbersWithText';
import IconItem from '../IconItem';

const CityInfo = ({ cityName }) => (
  <div className="city-info">
    <WeatherInicator
      className="city-info__indicator"
      desc="cloudy" />
    <NumbersWithText
      className="city-info__clock"
      numbers={[18, 20]} text="Budapest" />
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