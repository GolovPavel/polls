import React, {Component} from 'react';
import {Form} from "antd";
import SignupForm from "./SignupForm";

import "../Auth.css";

class Signup extends Component {
  render() {
    const WrappedSignupForm = Form.create()(SignupForm);

    return (
      <div>
        <div className="auth-container">
          <h1 className="page-title">Sign Up</h1>
          <div className="auth-content">
            <WrappedSignupForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
