import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import { Form } from 'antd';

import "../Auth.css";

class Login extends Component {
  render() {
    const WrappedLoginForm = Form.create()(LoginForm);

    return (
      <div className="auth-container">
        <h1 className="page-title">Login</h1>
        <div className="auth-content">
          <WrappedLoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
