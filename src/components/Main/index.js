import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import Page1Container from '../../containers/Page1Container';

import './styles.css';

const store = createStore(
  s => s,
  process.env.NODE_ENV === 'production' ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
)

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Page1Container} />
    </BrowserRouter>
  </Provider>
)

export default Main;
