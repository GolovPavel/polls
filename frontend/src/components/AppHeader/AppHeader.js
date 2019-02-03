import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Dropdown, Icon } from 'antd';
import { Link } from "react-router-dom";
import SignedInLinks from "./SingedLinks/SingnedInLinks";
import "./AppHeader.css";
const Header = Layout.Header;


class AppHeader extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Header className="app-header">
        <div className="container">
          <div className="app-title" >
            <Link to="/">Polling App</Link>
          </div>
          <SignedInLinks/>
        </div>
      </Header>
    );
  }
}

export default AppHeader;
