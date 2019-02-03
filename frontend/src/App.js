import React, {Component} from 'react';
import { Layout, Menu } from "antd";
import { Link, Router, withRouter } from "react-router-dom";

import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";


class App extends Component {
    render() {
        return (
          <Layout className="app-container">
            <AppHeader/>
          </Layout>
        );
    }
}

export default withRouter(App);
