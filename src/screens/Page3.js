import React from 'react';
import PropTypes from 'prop-types';
import './screens.scss';
import CityInfoContainer from '../containers/CityInfoContainer';

const Page3 = props => {
  const { history: { goBack } } = props;

  return (
    <div className="screen">
      <div className="page-header">
        <div onClick={goBack}>Vissza</div>
      </div>
      <CityInfoContainer {...props} />
    </div>
  )
}

Page3.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
}

export default Page3;
