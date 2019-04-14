import {request} from "../../utils/ApiUtils";
import {API_BASE_URL} from "../../constants/api";
import {SIGNUP_ERROR, SIGNUP_SUCCESS} from "../../constants/auth";
import {
  openErrorSignUpNotification,
  openSuccessSignUpNotification
} from "../../components/Notifications/authNotifications";
import history from '../../history';

export const signUp = (userData) =>
  dispatch => {
    request({
      url: `${API_BASE_URL}/auth/signup`,
      method: 'POST',
      body: JSON.stringify(userData)
    }).then(data =>
      dispatch({
      type: SIGNUP_SUCCESS,
    }))
    .then(() => history.push('/login'))
    .then(() => openSuccessSignUpNotification())
    .catch(err => {
      dispatch({
        type: SIGNUP_ERROR,
        err
      });
      openErrorSignUpNotification(err.message)
    })
  };
