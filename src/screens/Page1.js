import React from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import './screens.scss';

const Page1 = ({ savedCities }) => (
  <div className="screen">
    <List items={savedCities} />
  </div>
)

Page1.propTypes = {
  savedCities: PropTypes.arrayOf(PropTypes.shape({})),
}

Page1.defaultProps = {
  savedCities: []
}

export default Page1;
