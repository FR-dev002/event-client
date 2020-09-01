import Regex from "./../../../constant/regex";
import Errors from "../../../constant/error";

const InputText = event => {
  let errors = {};
  const value = event.target.value;
  const name = event.target.name;
  const required = event.target.required;
  const aplaNumeric = event.target.getAttribute("alpa-numeric");

  if (required) {
    if (value === "") {
      errors[name] = Errors.username.required;
      return errors;
    }
  }

  if (aplaNumeric) {
    if (!value.match(Regex.username)) {
      errors[name] = Errors.username.invalid;
      return errors;
    }
  }

  return errors;
};

export default InputText;
