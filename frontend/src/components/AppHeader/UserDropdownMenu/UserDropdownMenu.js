import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from 'antd';

import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  const dropdownMenu = (
    <Menu  className="profile-dropdown-menu">
      <Menu.Item key="user-info" className="dropdown-item">
        <div className="user-full-name-info">
          Имя твоей мамки
        </div>
        <div className="username-info">
          @tvoya_mamka
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile" className="dropdown-item">
        <Link to={`/users/`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" className="dropdown-item">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      placement="bottomLeft"
      trigger={['click']}
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <div className="ant-dropdown-link">
        <Icon type="user" className="nav-icon" style={{marginRight: 0}} /> <Icon type="down" />
      </div>
    </Dropdown>
  );
};

export default UserDropdownMenu;

