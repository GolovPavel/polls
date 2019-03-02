import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { validateFunction } from "../../../helpers/validators";

import "../Auth.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: {
        value: ""
      },
      username: {
        value: ""
      },
      email: {
        value: ""
      },
      password: {
        value: ""
      }
    }
  }

  handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: {
        value: inputValue,
        ...validateFunction(inputName, inputValue)
      }
    })
  };

  render() {
    const { fullName, username, email, password } = this.state;
    const isFormValid = fullName.validateStatus === "success" && username.validateStatus === "success" && email.validateStatus === "success" && password.validateStatus === "success";

    return (
      <Form className="signup-form">
        <Form.Item
          validateStatus={fullName.validateStatus}
          help={fullName.errorMsg}
        >
          <Input
            prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="fullName"
            placeholder="Full Name"
            autoComplete="off"
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={username.validateStatus}
          help={username.errorMsg}
        >
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="username"
            autoComplete="off"
            placeholder="Username"
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={email.validateStatus}
          help={email.errorMsg}
        >
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={password.validateStatus}
          help={password.errorMsg}
        >
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="auth-form-button"
            disabled={!isFormValid}
          >
            Sign up
          </Button>
          Or <Link to="/login">login now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default SignupForm;

