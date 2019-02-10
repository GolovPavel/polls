import React, {Component} from 'react';
import { Layout } from "antd";
import { withRouter, Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import HomePage from "./components/HomePage/HomePage";
import './App.css';
import Login from "./components/Auth/Login/Login";

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
                  </Switch>
                </div>
              </Content>
          </Layout>
        );
    }
}

export default withRouter(App);
