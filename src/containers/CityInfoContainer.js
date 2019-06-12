import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { checkStatusOk } from '../helpers/restHelper';
import CityInfo from '../components/CityInfo';
import { selectCityInfo } from '../ducks/selectors';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

class CityInfoContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    cityInfo: PropTypes.shape({}),
    dispatch: PropTypes.func.isRequired,
  }
  
  static defaultProps = {
    match: { params: null },
    cityInfo: {}
  }

  componentDidMount(){
    const { match: { params: { cityName, countryCode } }} = this.props;
    const { dispatch } = this.props;
    dispatch({ type: 'GET_CITY_INFO__LOADING '})
    axios.get(`${apiBaseUrl}city/${cityName}/${countryCode}`)
    .then(checkStatusOk)
    .then(payload => {
      dispatch({ type: 'GET_CITY_INFO__SUCCESS', payload })
    })
  }

  render(){
    const { cityInfo } = this.props;
    return <CityInfo {...cityInfo} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { cityName, countryCode }}} = ownProps;

  return {
    cityInfo: selectCityInfo(state, cityName, countryCode)
  }
}

export default connect(mapStateToProps)(CityInfoContainer);
