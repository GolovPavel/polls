import React from 'react';
import pollIcon from '../poll.svg';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import "./SignedLinks.css";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";

const SignedInLinks = () => {
  return (
    <Menu
      className="app-menu"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" className="nav-icon" />
        </Link>
      </Menu.Item>
      <Menu.Item key="/poll/new">
        <Link to="/poll/new">
          <img src={pollIcon} alt="poll" className="poll-icon" />
        </Link>
      </Menu.Item>
      <Menu.Item key="/profile" className="profile-menu">
          <UserDropdownMenu/>
      </Menu.Item>
    </Menu>
  );
};

export default SignedInLinks;


