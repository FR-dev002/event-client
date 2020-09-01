import Regex from './../../../constant/regex';
import Errors from '../../../constant/error';
const UsernameAuthentication = username => {
  let errors = {};
  if (!username) {
    errors.username = Errors.username.required;
  } else if (!username.match(Regex.username)) {
    errors.username = Errors.username.invalid;
  }
  return errors;
};

export default UsernameAuthentication;
