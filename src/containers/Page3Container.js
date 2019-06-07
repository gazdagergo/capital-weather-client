import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page3 from '../screens/Page3';

class Page3Container extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
  }
  
  static defaultProps = {
    match: { params: null }
  }

  render(){
    const { match: { params: { cityName, countryCode } }} = this.props;
    return <Page3 cityName={cityName} countryCode={countryCode} />
  }
}

export default connect()(Page3Container);
