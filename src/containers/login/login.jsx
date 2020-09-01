/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useContext } from "react";
import "./login.css";
import HandleLogin from "./handleLogin";
import InputText from "../../components/forms/inputText";
import Button from "../../components/forms/button";
import { Link } from "react-router-dom";
import LocalStorage from "./../../helpers/localStorage";
import { AuthContext } from "./../../ContextApi/authContect";

const INITIAL_STATE = {
  password: "",
  username: ""
};



const Login = props => {
  
  const { dispatch } = useContext(AuthContext);


  // custom hooks
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    event,
    handleInputPassword,
    handleInputText,
    res
  } = HandleLogin(INITIAL_STATE);
  
  const { setToken, setRole } = LocalStorage(); 


  if (res.data) {
    const data = res.data.data.original;
    setRole(data.role);
    setToken(data.token);
    props.history.push("/");
    dispatch({ type: "LOGIN" });
  }


  
  return (
    <Fragment>
      <div className=" login__form">
        <div>
          <header>
            <h4>Login Form</h4>
          </header>
        </div>
        <div className="text-center">
          <p style={{ color: "red", marginBottom: 0 }}>
            {res.error ? res.error.message : ""}
          </p>
        </div>
        <div className="login__form-content">
          <form className="form__control" onSubmit={handleSubmit} name="login">
            {/* input username */}
            <InputText
              label="username"
              error={res.error ? res.error.username : errors.username}
              name="username"
              change={handleChange}
              blur={handleInputText}
              value={values.username}
              type="text"
              required={true}
              alpaNumeric="true"
              render={event}
            />
            {/* end */}

            {/* input Password */}
            <InputText
              label="password"
              error={res.error ? res.error.password : errors.password}
              name="password"
              change={handleChange}
              blur={handleInputPassword}
              value={values.password}
              type="password"
              required={true}
              specialCharacter="true"
              render={event}
            />
            {/* end */}

            <div className="row">
              <div className="col-6">
                <div className=" register__link">
                  <Link
                    to="/register"
                    disabled={res.isLoading ? "disabled" : ""}
                  >
                    <span>Register</span>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <Button type="submit" isLoading={res.isLoading}>
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
