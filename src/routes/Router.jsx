/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Router = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  console.log("USER DO PAI: ", user);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Router;
