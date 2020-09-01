import Errors from "./../../../constant/error";
import Regex from "./../../../constant/regex";
const InputEmail = event => {
  let errors = {};
  let name = event.target.name;
  let value = event.target.value;
  const mail = event.target.getAttribute("mail");

  if (mail) {
    if (!value.match(Regex.email)) {
      errors[name] = Errors.email.invalid;
      return errors;
    }
  }

  return errors;
};

export default InputEmail;
