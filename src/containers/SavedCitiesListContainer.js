import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { selectSavedCities } from '../ducks/selectors';
import List from '../components/List';
import { checkStatusOk } from '../helpers/restHelper';


const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

class SavedCitiesListContainer extends Component {
  static propTypes = {
    savedCities: PropTypes.arrayOf(PropTypes.shape({})),
    dispatch: PropTypes.func.isRequired,
  }
  
  static defaultProps = {
    savedCities: []
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({ type: 'GET_SAVED_CITIES__LOADING'});
    axios.get(`${apiBaseUrl}saved-cities`)
    .then(checkStatusOk)
    .then(payload => {
      dispatch({ type: 'GET_SAVED_CITIES__SUCCESS', payload })
    })
  }


  render(){
    const { savedCities } = this.props;
    return <List items={savedCities} />
  }
}

const mapStateToProps = state => ({
  savedCities: selectSavedCities(state)
})

export default connect(mapStateToProps)(SavedCitiesListContainer);
