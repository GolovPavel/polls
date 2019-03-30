import {
  EMAIL_MASK,
  EMAIL_MAX_LENGTH,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH
} from "../constants/validators";
import {checkEmailAvailability, checkUsernameAvailability} from "../store/actions/checkAvailability";
import {
  EMAIL_IS_EMPTY,
  EMAIL_IS_INVALID,
  EMAIL_IS_TOO_LONG,
  USERNAME_IS_TOO_LONG,
  USERNAME_IS_TOO_SHORT
} from "../constants/auth";
import {store} from "../index";

export const successValidation = {
  validateStatus: "success",
  errorMsg: null
};

export const validateFunction = (fieldName, fieldValue) => {
  switch (fieldName) {
    case "name":
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

export const validateFullName = fullName => {
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

export const validateUserName = username => {
  if (username.length < USERNAME_MIN_LENGTH) {
    store.dispatch({
      type: USERNAME_IS_TOO_SHORT,
      payload: {
        message: `Name is too short.(Minimum ${USERNAME_MIN_LENGTH} characters needed.)`,
        value: username,
        inputType: 'username'
      }

    })
  }else if (username.length > USERNAME_MAX_LENGTH) {
    store.dispatch({
      type: USERNAME_IS_TOO_LONG,
      payload: {
        message: `Name is too long.(Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`,
        value: username,
        inputType: 'username'
      }
    })
  } else {
    store.dispatch(checkUsernameAvailability(username))
  }
};

const validateEmail = email => {
  if (!email) {
    store.dispatch({
      type: EMAIL_IS_EMPTY,
      payload: {
        message: 'Email may not be empty',
        value: email,
        inputType: 'email'
      }
    });
    return;
  }

  if (!EMAIL_MASK.test(email)) {
    store.dispatch({
      type: EMAIL_IS_INVALID,
      payload: {
        message: 'Email is invalid!',
        value: email,
        inputType: 'email'
      }
    });
    return;
  }

  if (email.length > EMAIL_MAX_LENGTH) {
    store.dispatch({
      type: EMAIL_IS_TOO_LONG,
      payload: {
        message: `Email is too long.(Maximum ${EMAIL_MAX_LENGTH} characters allowed.)`,
        value: email,
        inputType: 'email'
      }
    });
    return;
  }

  store.dispatch(checkEmailAvailability(email))
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

