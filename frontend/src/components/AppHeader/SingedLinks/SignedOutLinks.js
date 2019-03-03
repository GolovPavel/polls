import React from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";

import "./SignedLinks.css";

const SignedOutLinks = () => {
  return (
    <Menu
      className="app-menu"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/login">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="/signup">
        <Link to="/signup">Signup</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SignedOutLinks;
