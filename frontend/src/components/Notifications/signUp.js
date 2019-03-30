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
    description: description || 'Sorry! Something went wrong. Please try again!'
  });
};
