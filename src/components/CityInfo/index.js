import React from 'react';
import PropTypes from 'prop-types';

const CityInfo = ({ cityName, countryCode }) => (
  <div>
    {cityName}
    {countryCode}
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