import React, { Fragment } from "react";

import Navbar from "./../layouts/navbar";
import { Router } from "react-router-dom";
import history from "./../helpers/history";

import { Home, Event, Logout } from "./ListComponent/component";
import { Login, Register } from "./ListComponent/auth";
import { PrivateRoute, NothaveToken } from "./ListComponent/router";
import AuthContextProvider from "./../ContextApi/authContect";
import { Route } from "react-router";


const Routes = () => {
  return (
    <Fragment>
      <Router history={history}>
        <div>
          <AuthContextProvider>
            <Navbar />
            <main style={{ marginTop: "60px" }}>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/event" component={Event} />
              <PrivateRoute path="/logout" component={Logout} />
              <NothaveToken path="/login" component={Login} />
              <NothaveToken path="/register" component={Register} />
            </main>
          </AuthContextProvider>
        </div>
      </Router>
    </Fragment>
  );
};

export default Routes;
