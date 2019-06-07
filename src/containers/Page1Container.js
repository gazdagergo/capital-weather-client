import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page1 from '../screens/Page1';
import { selectSavedCities } from '../ducks/selectors';


class Page1Container extends Component {
  render(){
    return <Page1 {...this.props} />
  }
}

const mapStateToProps = state => ({
  savedCities: selectSavedCities(state)
})

export default connect(mapStateToProps)(Page1Container);
