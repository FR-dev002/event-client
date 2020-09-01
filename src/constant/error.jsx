const Errors = {
  email: {
    invalid: "Invalid Email Address",
    required: "Email is Required"
  },
  password: {
    invalidRegex:
      "Password must between 8 to 15 character, use uppercase letters, numbers and special characters",
    required: "Password is Required"
  },
  passwordConfirmation: {
    notMatch: "Your password and confirmation password do not match.",
    required: "Password is Required."
  },
  username: {
    invalid:
      "Usernames must between 8 to 15 character, use uppercase letters, numbers",
    required: "Username required"
  }
};

export default Errors;
