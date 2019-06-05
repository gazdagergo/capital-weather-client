import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './styles.css';
import MyCities from '../../screens/MyCities';

const Main = () => (
  <BrowserRouter>
    <Route exact path="/" component={MyCities} />
  </BrowserRouter>
)

export default Main;
