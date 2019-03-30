import {request} from "../../utils/ApiUtils";
import {API_BASE_URL} from "../../constants/api";
import {
  EMAIL_IS_AVAILABLE,
  EMAIL_IS_NOT_AVAILABLE,
  USERNAME_IS_AVAILABLE,
  USERNAME_IS_NOT_AVAILABLE,
  USERNAME_IS_VALIDATING
} from "../../constants/auth";

export const checkUsernameAvailability = username =>
  dispatch =>
    request({
      url: `${API_BASE_URL}/user/checkUsernameAvailability?username=${username}`,
      method: 'GET',
    }).then(data => {
      if (data.available) {
        dispatch({
          type: USERNAME_IS_AVAILABLE,
          payload: {
            value: username,
            inputType: 'username'
          }
        })
      } else {
        dispatch({
          type: USERNAME_IS_NOT_AVAILABLE,
          payload: {
            value: username,
            inputType: 'username'
          }
        })
      }
    });

export const checkEmailAvailability = email =>
  dispatch =>
    request({
      url: `${API_BASE_URL}/user/checkEmailAvailability?email=${email}`,
      method: 'GET',
    }).then(data => {
      if (data.available) {
        dispatch({
          type: EMAIL_IS_AVAILABLE,
          payload: {
            value: email,
            inputType: 'email'
          }
        })
      } else {
        dispatch({
          type: EMAIL_IS_NOT_AVAILABLE,
          payload: {
            value: email,
            inputType: 'email'
          }
        })
      }
    });

export const checkingAvaibility = action => {
  let inputType;
  if (action === USERNAME_IS_VALIDATING) {
    inputType = 'username'
  } else {
    inputType = 'email'
  }

  return {
    type: action,
    payload: {
      inputType: inputType,
    }
  }
};
