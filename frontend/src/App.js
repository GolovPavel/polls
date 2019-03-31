import React, {Component} from 'react';
import {Layout} from "antd";
import {Route, Switch, withRouter} from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

import './App.css';

const { Content } = Layout;

class App extends Component {
    render() {
        return (
          <Layout className="app-container">
            <AppHeader/>
              <Content className="app-content">
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                  </Switch>
                </div>
              </Content>
          </Layout>
        );
    }
}

export default withRouter(App);
