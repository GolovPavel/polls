import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS
} from '../../constants/auth';

const initState = {
  authError: ""
};

const authReducer = (state = {initState}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: ""
      };

    case LOGIN_ERROR:
      return {
        ...state,
        authError: "Login failed"
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: ""
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        authError: "тут будет сообщение"
      };

    case LOGOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default authReducer;

