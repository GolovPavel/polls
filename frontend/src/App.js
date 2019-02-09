import React, {Component} from 'react';
import { Layout } from "antd";
import { withRouter } from "react-router-dom";

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
