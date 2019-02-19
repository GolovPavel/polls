import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import "../Auth.css";

class SignupForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="signup-form">
        <Form.Item>
          {getFieldDecorator('fullName', {
            rules: [{ required: true, message: 'Please input your fullname!' }],
          })(
            <Input
              prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="fullName"
              placeholder="Full Name"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="username"
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="email"
              placeholder="Email"
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
            Sign up
          </Button>
          Or <Link to="/login">login now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default SignupForm;

