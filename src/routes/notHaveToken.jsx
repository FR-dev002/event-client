import React from "react";
import { Route } from "react-router";
import LocalStorage from "./../helpers/localStorage";
const NotHaveToken = ({ component: Component, ...rest }) => {
  const { getToken } = LocalStorage();
  const token = getToken();
  return (
    <Route
      {...rest}
      render={props =>
        token === null ? <Component {...props} /> : props.history.go(-1)
      }
    ></Route>
  );
};

export default NotHaveToken;
