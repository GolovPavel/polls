import React, {Component} from 'react';
import {Button, Form, Icon, Input} from 'antd';
import {Link} from "react-router-dom";
import {logIn} from "../../../store/actions/logIn";

import "../Auth.css";
import {connect} from "react-redux";

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const { logIn, form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        logIn(values);
      }
    })
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('usernameOrEmail', {
            rules: [{ required: true, message: 'Please input your username or email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="usernameOrEmail"
              placeholder="Username or Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
            Login
          </Button>
            Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.auth.loginError,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: userData => dispatch(logIn(userData)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
