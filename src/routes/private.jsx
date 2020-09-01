import React from "react";
import { Redirect, Route } from "react-router";
import LocalStorage from "./../helpers/localStorage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { expiredToken } = LocalStorage();
  return (
    <Route
      {...rest}
      render={props =>
        expiredToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
