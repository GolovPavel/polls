import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import { Form } from 'antd';
import "./Login.css";

class Login extends Component {
  render() {
    const WrappedLoginForm = Form.create()(LoginForm);

    return (
      <div className="login-container">
        <h1 className="page-title">Login</h1>
        <div className="login-content">
          <WrappedLoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
