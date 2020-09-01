/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import InputText from '../../validations/rules/onInput/inputText';
import InputPassword from '../../validations/rules/onInput/inputPassword';
import InputPasswordConfirmation from '../../validations/rules/onInput/inputPasswordConfirmation';
import InputEmail from '../../validations/rules/onInput/inputEmail';

import UsernameAuthentication from '../../validations/rules/submitForm/username';
import passwordAuthentication from '../../validations/rules/submitForm/password';
import EmailAuthentication from '../../validations/rules/submitForm/email';
import passwordConfirmationAuthentication from '../../validations/rules/submitForm/passwordConfirmation';

import HttpPostData from '../../constant/httpRequest';

const HandleRegister = initialState => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [render, setRender] = useState(false);

  // FUNGSI UNTUK STORE DATA KE DATABASE
  const [res, callAPIPost] = HttpPostData({
    url: process.env.REACT_APP_CUSTOM_BASE_URL + 'auth/register',
    headers: { ContentType: 'application/json' },
    payload: values
  });

  /**
   *
   * @description reset nilai isSubmiting
   *
   */
  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (isSubmitting) {
      if (noErrors) {
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
    return isSubmitting => {
      isSubmitting = false;
    };
  }, [errors, isSubmitting]);

  /**
   *
   * @description set nilai dari form yang akan di submitke database
   * @param {*} event
   *
   */
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  /**
   *
   * @description validasi form input type text
   * @param {event dari form input} event
   *
   */
  const handleInputText = event => {
    delete errors[event.target.name];
    const validationErrors = InputText(event);
    setErrors({ ...errors, ...validationErrors });
    setRender(prev => !prev);
  };


  /**
   *
   * @description validasi form input type password
   * @param {event dari form input} event
   *
   */
  const handleInputPassword = event => {
    delete errors[event.target.name];
    const validationErrors = InputPassword(event);
    setErrors({ ...errors, ...validationErrors });
    setRender(prev => !prev);
  };


  /**
   *
   * @description validasi form input type password confirmation
   * @param {event dari form input} event
   *
   */
  const handleInputPasswordConfirmation = event => {
    delete errors[event.target.name];
    const validationErrors = InputPasswordConfirmation(event, values.password);
    setErrors({ ...errors, ...validationErrors });
    setRender(prev => !prev);
  };



  /**
   * @description validasi form input type email
   * @param {event dari form input} event
   */
  const handleInputEmail = event => {
    delete errors[event.target.name];
    const validationErrors = InputEmail(event);
    setErrors({ ...errors, ...validationErrors });
    setRender(prev => !prev);
  };



  // lakukan validasi data setelah form di submit
  const handleSubmit = event => {
    event.preventDefault();
    let validationErrors;

    const errorPassword = passwordAuthentication(values.password);
    const errorUsername = UsernameAuthentication(values.username);
    const errorEmail = EmailAuthentication(values.email);
    const errorPasswordConfirmation = passwordConfirmationAuthentication(
      values.password_confirmation,
      values.password
    );
    validationErrors = {
      ...errorPassword,
      ...errorUsername,
      ...errorEmail,
      ...errorPasswordConfirmation
    };

    // Check jika terdapat error pada form
    const len = Object.keys(validationErrors).length
    if (len) {
      setErrors(validationErrors);
    } else {
      // Post data ke database jika sudah tidak ada data yang error
      callAPIPost();
    }
    setRender(prev => !prev);
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    isSubmitting,
    res,
    handleSubmit,
    handleInputText,
    handleInputPassword,
    handleInputPasswordConfirmation,
    handleInputEmail,
    handleChange,
    render
  };
};

export default HandleRegister;
