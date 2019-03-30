import React, {Component} from 'react';
import {Button, Form, Icon, Input} from 'antd';
import {Link} from "react-router-dom";
import {validateFunction} from "../../../helpers/validators";
import {signUp} from "../../../store/actions/signUp";
import {checkingAvaibility} from "../../../store/actions/checkAvailability";
import {connect} from "react-redux";

import "../Auth.css";
import {EMAIL_IS_VALIDATING, USERNAME_IS_VALIDATING} from "../../../constants/auth";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: "",
      },
      password: {
        value: "",
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

  handleSubmit = event => {
    event.preventDefault();

    const { name, password } = this.state;
    const { signUp, signupError, username, email } = this.props;
    const userData = {
      email: email.value,
      name: name.value,
      password: password.value,
      username: username.value,
    };
    signUp(userData);
  };

  validateUserNameOrEmailAviability = event => {
    const usernameOrEmail = {
      username: USERNAME_IS_VALIDATING,
      email: EMAIL_IS_VALIDATING,
    };
    const inputValue = event.target.value;
    const inputName = event.target.name;
    const { checkingAvaibility } = this.props;

    checkingAvaibility(usernameOrEmail[inputName]);
    validateFunction(inputName, inputValue);

  };

  render() {
    const { name, password } = this.state;
    const { username, email } = this.props;
    const isFormValid = name.validateStatus === "success" &&
      username.validateStatus === "success" && email.validateStatus === "success" &&
      password.validateStatus === "success";

    return (
      <Form className="signup-form" onSubmit={this.handleSubmit}>
        <Form.Item
          hasFeedback
          validateStatus={name.validateStatus}
          help={name.errorMsg}
        >
          <Input
            prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="name"
            placeholder="Full Name"
            autoComplete="off"
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          validateStatus={username.validateStatus}
          help={username.errorMsg}
        >
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="username"
            autoComplete="off"
            placeholder="Username"
            onBlur={this.validateUserNameOrEmailAviability}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          validateStatus={email.validateStatus}
          help={email.errorMsg}
        >
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="email"
            placeholder="Email"
            autoComplete="off"
            onBlur={this.validateUserNameOrEmailAviability}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
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

const mapStateToProps = state => {
  return {
    signupError: state.auth.signupError,
    username: state.auth.username,
    email: state.auth.email,
  }
};

const mapDispatchToProps = dispath => {
  return {
    signUp: userData => dispath(signUp(userData)),
    checkingAvaibility: type => dispath(checkingAvaibility(type))
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

