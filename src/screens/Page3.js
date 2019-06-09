import React from 'react';
import PropTypes from 'prop-types';
import CityInfoContainer from '../containers/CityInfoContainer';
import Icon from '../components/Icon';

import './screens.scss';

const Page3 = props => {
  const { history: { goBack } } = props;

  return (
    <div className="screen">
      <div className="page-header">
        <div className="page-header__back" onClick={goBack}>
          <Icon name="back" />
        </div>
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
