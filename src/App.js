import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/Router";

import GlobalStyles from './GlobalStyles';

const App = () => (
  <BrowserRouter>
  <GlobalStyles />
    <Routes />
  </BrowserRouter>
);

export default App;
