import React, {Component} from 'react';
import { Layout } from 'antd';
import { Link } from "react-router-dom";
import SignedInLinks from "./SingedLinks/SingnedInLinks";
import "./AppHeader.css";
import SignedOutLinks from "./SingedLinks/SignedOutLinks";
const Header = Layout.Header;


class AppHeader extends Component {
  render() {
    return (
      <Header className="app-header">
        <div className="container">
          <div className="app-title" >
            <Link to="/">Polling App</Link>
          </div>
          <SignedInLinks/>
          <SignedOutLinks/>
        </div>
      </Header>
    );
  }
}

export default AppHeader;
