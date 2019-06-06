import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './screens.scss';

const Page3 = ({ match: { params } }) => (
  <div className="screen">
    {params.id}
  </div>
)

Page3.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({}),
  }),
}

Page3.defaultProps = {
  match: { params: null }
}

export default withRouter(Page3);
