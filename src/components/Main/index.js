import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Page1Container from '../../containers/Page1Container';

import './styles.css';

const Main = () => (
  <BrowserRouter>
    <Route exact path="/" component={Page1Container} />
  </BrowserRouter>
)

export default Main;
