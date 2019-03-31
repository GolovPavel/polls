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
