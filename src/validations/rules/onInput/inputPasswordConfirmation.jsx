import Errors from "./../../../constant/error";
const InputPasswordConfirmation = (event, password) => {
  let errors = {};
  const value = event.target.value;
  const matches = event.target.getAttribute("matches");
  if (matches) {
    if (value !== password) {
      errors.password_confirmation = Errors.passwordConfirmation.notMatch;
    }
  }
  return errors;
};

export default InputPasswordConfirmation;
