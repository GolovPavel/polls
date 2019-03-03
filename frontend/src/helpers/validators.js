import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  EMAIL_MASK,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH
} from "../constants/validators";

const successValidation = {
  validateStatus: "success",
  errorMsg: null
};

export const validateFunction = (fieldName, fieldValue) => {
  switch (fieldName) {
    case "fullName":
      return validateFullName(fieldValue);
    case "username":
      return validateUserName(fieldValue);
    case "email":
      return validateEmail(fieldValue);
    case "password":
      return validatePassword(fieldValue);
    default:
      return successValidation;
  }
};

const validateFullName = fullName => {
  if (fullName.length < NAME_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Name is too short.(Minimum ${NAME_MIN_LENGTH} characters needed.)`
    }
  }

  if (fullName.length > NAME_MAX_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Name is too long.(Maximum ${NAME_MAX_LENGTH} characters allowed.)`
    }
  }

  return successValidation;
};

const validateUserName = username => {
  if (username.length < USERNAME_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Username is too short.(Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
    }
  }

  if (username.length > USERNAME_MAX_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Username is too long.(Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
    }
  }

  return successValidation;
};

const validateEmail = email => {
  if (!email) {
    return {
      validateStatus: "error",
      errorMsg: "Email may not be empty"
    }
  }

  if (!EMAIL_MASK.test(email)) {
    return {
      validateStatus: "error",
      errorMsg: "Email is invalid"
    }
  }

  if (email.length > EMAIL_MAX_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Email is too long.(Maximum ${EMAIL_MAX_LENGTH} characters allowed.)`
    }
  }

  return successValidation;
};

const validatePassword = password => {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Password is too short.(Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
    }
  }

  if (password.length > PASSWORD_MAX_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Password is too long.(Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
    }
  }

  return successValidation;
};

