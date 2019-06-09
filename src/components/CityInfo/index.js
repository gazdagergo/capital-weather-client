import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import WeatherInicator from '../WeatherInicator';
import NumbersWithText from '../NumbersWithText';
import IconItem from '../IconItem';

const CityInfo = ({ cityName, countryCode }) => (
  <div className="city-info">
    <WeatherInicator desc="cloudy" />
    <NumbersWithText numbers={[18, 20]} text="Budapest" />
    <div>
      <IconItem iconName="wi-cloudy">10˚C</IconItem>
      <IconItem iconName="wi-sunrise">6:00</IconItem>
      <IconItem iconName="wi-sunset">18:00</IconItem>
    </div>
  
  </div>
)

CityInfo.propTypes = {
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
}

CityInfo.defaultProps = {
  cityName: '',
  countryCode: ''
}

export default CityInfo;