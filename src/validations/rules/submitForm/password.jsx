import Errors from "./../../../constant/error";
import Regex from "./../../../constant/regex";
const passwordAuthentication = password => {
  let errors = {};
  if (!password) {
    errors.password = Errors.password.required;
  } else if (!password.match(Regex.password)) {
    errors.password = Errors.password.invalidRegex;
  }
  return errors;
};

export default passwordAuthentication;
