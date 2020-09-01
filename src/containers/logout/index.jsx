import React, { Fragment, useContext, useEffect } from "react";
import { AuthContext } from "./../../ContextApi/authContect";
import LocalStorage from "./../../helpers/localStorage";

const Logout = props => {
  const { dispatch } = useContext(AuthContext);
  const { clearToten } = LocalStorage();

  useEffect(() => {
    dispatch({ type: "LOGOUT" });
    clearToten();
    props.history.push("/login");
  });
  return <Fragment></Fragment>;
};

export default Logout;
