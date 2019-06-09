import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import Page1 from '../../screens/Page1';
import Page3 from '../../screens/Page3';
import capitalReducer from '../../ducks/capitalReducer';
import { CITY_ROUTE } from '../../constants';


import './styles.css';

const store = createStore(
  capitalReducer,
  process.env.NODE_ENV === 'production' ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
)

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Page1} />
      <Route exact path={`/${CITY_ROUTE}/:cityName/:countryCode`} component={Page3} />
    </BrowserRouter>
  </Provider>
)

export default Main;
