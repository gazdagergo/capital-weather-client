import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import Page1Container from '../../containers/Page1Container';
import Page3Container from '../../containers/Page3Container';
import capitalReducer from '../../ducks/capitalReducer';

import './styles.css';

const store = createStore(
  capitalReducer,
  process.env.NODE_ENV === 'production' ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
)

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Page1Container} />
      <Route exact path="/city/:id" component={Page3Container} />
    </BrowserRouter>
  </Provider>
)

export default Main;
