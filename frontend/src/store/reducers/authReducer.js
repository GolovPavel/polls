import {
  EMAIL_IS_AVAILABLE,
  EMAIL_IS_EMPTY,
  EMAIL_IS_INVALID,
  EMAIL_IS_NOT_AVAILABLE,
  EMAIL_IS_TOO_LONG,
  EMAIL_IS_VALIDATING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  USERNAME_IS_AVAILABLE,
  USERNAME_IS_NOT_AVAILABLE,
  USERNAME_IS_TOO_LONG,
  USERNAME_IS_TOO_SHORT,
  USERNAME_IS_VALIDATING,
} from '../../constants/auth';

const initialState = {
  signupError: "",
  username: {
    value: "",
  },
  email: {
    value: "",
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupError: "",
        username: {
          ...state.username,
          validateStatus: null,
        },
        email: {
          ...state.email,
          validateStatus: null,
        },
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.err.message
      };

    case USERNAME_IS_TOO_LONG:
    case USERNAME_IS_TOO_SHORT:
    case EMAIL_IS_EMPTY:
    case EMAIL_IS_INVALID:
    case EMAIL_IS_TOO_LONG:
      return {
        ...state,
        [action.payload.inputType]: {
          value: action.payload.value,
          validateStatus: "error",
          errorMsg: action.payload.message,
        }
      };

    case USERNAME_IS_AVAILABLE:
    case EMAIL_IS_AVAILABLE:
      return {
        ...state,
        [action.payload.inputType]: {
          value: action.payload.value,
          validateStatus: "success",
          errorMsg: null,
        }
      };

    case USERNAME_IS_NOT_AVAILABLE:
    case EMAIL_IS_NOT_AVAILABLE:
      return {
        ...state,
        [action.payload.inputType]: {
          value: action.payload.value,
          validateStatus: "error",
          errorMsg: `This ${action.payload.inputType} is already taken`,
        }
      };

    case USERNAME_IS_VALIDATING:
    case EMAIL_IS_VALIDATING:
      return {
        ...state,
        [action.payload.inputType]: {
          validateStatus: "validating",
          errorMsg: null,
        }
      };

    default:
      return state;
  }
};

export default authReducer;

