import { useState, useEffect, useCallback } from "react";
import InputPassword from "./../../validations/rules/onInput/inputPassword";
import InputText from "./../../validations/rules/onInput/inputText";

import UsernameAuthentication from '../../validations/rules/submitForm/username';
import passwordAuthentication from '../../validations/rules/submitForm/password';

import HttpPostData from '../../constant/httpRequest';

const HandleLogin = initialState => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [event, setEvent] = useState(true);



  // FUNGSI UNTUK STORE DATA KE DATABASE
  const [res, callAPIPost] = HttpPostData({
    url: process.env.REACT_APP_CUSTOM_BASE_URL + 'auth/login',
    headers: { ContentType: 'application/json' },
    payload: values
  });

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
  }, [errors, isSubmitting, setEvent]);

  // lakukan perubahan pada value setiap ada perubahan dari form
  const handleChange = useCallback(
    event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    },
    [values]
  );

  /**
   * @description validasi form input type username
   * @param {event dari form input} event
   */
  const handleInputText = event => {
    delete errors[event.target.name];
    const validationErrors = InputText(event);
    setErrors({ ...errors, ...validationErrors });
    setEvent(prev => !prev);
  };

  /**
   * @description validasi form input type password
   * @param {event dari form input} event
   */
  const handleInputPassword = event => {
    delete errors[event.target.name];
    const validationErrors = InputPassword(event);
    if (validationErrors !== '') {
      setErrors({ ...errors, ...validationErrors });
      setEvent(prev => !prev)
    }
  };

  const handleSubmit = event => {
    console.log(errors);
    setErrors({});
    event.preventDefault();
    let validationErrors;
    const errorUsername = UsernameAuthentication(values.username);
    const errorPassword = passwordAuthentication(values.password);

    validationErrors = {
      ...errorPassword,
      ...errorUsername
    };

    const len = Object.keys(validationErrors).length
    if (len) {
      setErrors(validationErrors);
    } else {
      // Post data ke database jika sudah tidak ada data yang error
      callAPIPost();
    }

    setIsSubmitting(true);
  };



  return {
    handleSubmit,
    errors,
    values,
    event,
    handleChange,
    handleInputText,
    handleInputPassword,
    res
  };
};

export default HandleLogin;
