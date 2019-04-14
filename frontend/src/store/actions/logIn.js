import {request} from "../../utils/ApiUtils";
import {ACCESS_TOKEN, API_BASE_URL} from "../../constants/api";
import {LOGIN_ERROR, LOGIN_SUCCESS} from "../../constants/auth";
import {
  openErrorLogInNotification,
  openSuccessLogInNotification
} from "../../components/Notifications/authNotifications";
import history from '../../history';

export const logIn = (userData) =>
  dispatch => {
    request({
      url: `${API_BASE_URL}/auth/signin`,
      method: 'POST',
      body: JSON.stringify(userData)
    }).then(data => {
      localStorage.setItem(ACCESS_TOKEN, data.accessToken);

      dispatch({
        type: LOGIN_SUCCESS
      });
    }).then(() => openSuccessLogInNotification())
      .then(() => history.push('/'))
      .catch(err => {
        dispatch({
          type: LOGIN_ERROR,
        });

        openErrorLogInNotification();
      })
  };
