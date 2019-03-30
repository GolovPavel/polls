import {request} from "../../utils/ApiUtils";
import {API_BASE_URL} from "../../constants/api";
import {SIGNUP_ERROR, SIGNUP_SUCCESS} from "../../constants/auth";

export const signUp = userData =>
  dispatch => {
    request({
      url: `${API_BASE_URL}/auth/signup`,
      method: 'POST',
      body: JSON.stringify(userData)
    }).then(data =>
      dispatch({
      type: SIGNUP_SUCCESS,
    })).catch(err => dispatch({
      type: SIGNUP_ERROR,
      err
    }))
  };
