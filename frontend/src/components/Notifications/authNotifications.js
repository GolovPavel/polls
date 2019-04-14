import {notification} from 'antd';

export const openSuccessSignUpNotification = () => {
  notification.success({
    message: "Polling App",
    description: "Thank you! You're successfully registered. Please Login to continue!"
  });
};

export const openErrorSignUpNotification = description => {
  notification.error({
    message: "Polling App",
    description: Boolean(description) ? `${description}. Please, try again!` : 'Sorry! Something went wrong. Please try again!'
  });
};

export const openSuccessLogInNotification = () => {
  notification.success({
    message: "Polling App",
    description: "You're successfully logged in."
  });
};

export const openErrorLogInNotification = () => {
  notification.error({
    message: "Polling App",
    description: "Your Username or Password is incorrect. Please try again!"
  });
};

