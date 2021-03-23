import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/index";

import GlobalStyles from './GlobalStyles';

import {AuthProvider} from './context/AuthContext';



const App = () => (
  <>
    <BrowserRouter>
     <AuthProvider>
      <Routes />
     </AuthProvider>
     <GlobalStyles />
    </BrowserRouter>
  </>


);

export default App;
