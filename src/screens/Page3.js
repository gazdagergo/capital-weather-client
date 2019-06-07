import React from 'react';
import PropTypes from 'prop-types';
import './screens.scss';

const Page3 = ({ cityName, countryCode }) => (
  <div className="screen">
    {cityName}
    {countryCode}
  </div>
)

Page3.propTypes = {
  cityName: PropTypes.string,
  countryCode: PropTypes.string,
}

Page3.defaultProps = {
  cityName: '',
  countryCode: ''
}

export default Page3;
