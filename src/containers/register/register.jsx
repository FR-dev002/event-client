import React, { Fragment } from "react";
import "./register.css";
import InputText from "../../components/forms/inputText";
import Button from "../../components/forms/button";
import HandleRegister from "./handleRegister";
import { Redirect } from "react-router";

const INITIAL_STATE = {
  email: "",
  password: "",
  password_confirmation: "",
  username: "",
  firstName: "",
  role: 1,
};

const Register = () => {
  // FUNGSI UNTUK SEMUA VALIDASI FORM
  const {
    handleChange,
    values,
    errors,
    handleInputPassword,
    handleInputText,
    handleInputPasswordConfirmation,
    handleInputEmail,
    handleSubmit,
    render,
    res
  } = HandleRegister(INITIAL_STATE);
  // Redirect setelah submit data
  if (res.status) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className=" form__register">
        <div className="">
          <header>
            <h4>Register</h4>
          </header>
        </div>
        <form
          action=""
          className="register__form-content"
          onSubmit={handleSubmit}
          name="register"
        >
          <p style={{ color: "red" }}>{res.conflig ? res.conflig.error : ""}</p>
          <InputText
            error={res.error ? res.error.firstName : errors.firstName}
            label="firstName"
            change={handleChange}
            blur={handleInputText}
            value={values.firstName}
            name="firstName"
            type="text"
            required={true}
            render={render}
          />

          <InputText
            error={res.error ? res.error.username : errors.username}
            label="username"
            change={handleChange}
            blur={handleInputText}
            value={values.username}
            name="username"
            type="text"
            required={true}
            alpaNumeric="true"
            render={render}
          />

          <InputText
            error={res.error ? res.error.email : errors.email}
            label="email"
            change={handleChange}
            blur={handleInputEmail}
            value={values.email}
            name="email"
            type="text"
            mail="true"
            render={render}
          />

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
            render={render}
          />

          <InputText
            error={
              res.error
                ? res.error.password_confirmation
                : errors.password_confirmation
            }
            label="password confirmation"
            name="password_confirmation"
            change={handleChange}
            blur={handleInputPasswordConfirmation}
            value={values.password_confirmation}
            type="password"
            matches="true"
            render={render}
          />

          <div onChange={handleChange}>
            <input 
              type="radio" 
              value={1} 
              name="role"  
            /> Organizer
            <input 
              type="radio" 
              value={0} 
              name="role"
            /> User
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <Button type="submit" isLoading={res.isLoading}>
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
