import React, {Component} from 'react';
import {Layout} from 'antd';
import {Link} from "react-router-dom";
import SignedInLinks from "./SingedLinks/SingnedInLinks";
import SignedOutLinks from "./SingedLinks/SignedOutLinks";
import {ACCESS_TOKEN} from "../../constants/api";

import "./AppHeader.css";

const Header = Layout.Header;


class AppHeader extends Component {
  render() {
    const isLoggedIn = localStorage.getItem(ACCESS_TOKEN);

    return (
      <Header className="app-header">
        <div className="container">
          <div className="app-title" >
            <Link to="/">Polling App</Link>
          </div>
          {isLoggedIn ? <SignedInLinks/> :<SignedOutLinks/>}
        </div>
      </Header>
    );
  }
}

export default AppHeader;
