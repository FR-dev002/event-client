import Errors from "./../../../constant/error";
import Regex from "./../../../constant/regex";

const InputPassword = event => {
  let errors = {};
  const value = event.target.value;
  const name = event.target.name;
  const required = event.target.required;
  const specialCharacter = event.target.getAttribute("special-character");

  if (required) {
    if (value === "") {
      errors[name] = Errors.password.required;
      return errors;
    }
  }

  if (specialCharacter) {
    if (!value.match(Regex.password)) {
      errors[name] = Errors.password.invalidRegex;
      return errors;
    }
  }

  return errors;
};

export default InputPassword;
