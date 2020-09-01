import Errors from "../../../constant/error";
const passwordConfirmationAuthentication = (passwordConfirmation, password) => {
  let errors = {};
  if (!passwordConfirmation) {
    console.log(1);
    errors.password_confirmation = Errors.passwordConfirmation.required;
  } else if (passwordConfirmation !== password) {
    errors.password_confirmation = Errors.passwordConfirmation.notMatch;
  }
  return errors;
};

export default passwordConfirmationAuthentication;
