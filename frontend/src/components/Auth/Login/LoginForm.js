import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import "../Auth.css";

class LoginForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('userNameOrEmail', {
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

export default LoginForm;
