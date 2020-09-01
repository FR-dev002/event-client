import Errors from "./../../../constant/error";
import Regex from "./../../../constant/regex";
const EmailAuthentication = email => {
  let errors = {};
  if (!email) {
    errors.email = Errors.email.required;
  } else if (!email.match(Regex.email)) {
    errors.email = Errors.email.invalid;
  }
  return errors;
};

export default EmailAuthentication;
