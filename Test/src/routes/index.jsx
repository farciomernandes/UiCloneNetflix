import React from "react";

import { Switch } from "react-router-dom";
import Router from "./Router";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes = () => (
  <Switch>
    <Router exact path="/" component={SignIn} />
    <Router path="/signup" component={SignUp} />

    <Router path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
