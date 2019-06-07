import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import Page3 from '../screens/Page3';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

class Page3Container extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    dispatch: PropTypes.func.isRequired,
  }
  
  static defaultProps = {
    match: { params: null }
  }

  componentDidMount(){
    const { match: { params: { cityName, countryCode } }} = this.props;
    const { dispatch } = this.props;
    axios.get(`${apiBaseUrl}city/${cityName}/${countryCode}`);
    dispatch({ type: 'GET_CITY_INFO '})
  }

  render(){
    const { match: { params: { cityName, countryCode } }} = this.props;
    return <Page3 cityName={cityName} countryCode={countryCode} />
  }
}

export default connect()(Page3Container);
