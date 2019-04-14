import React, {Component} from 'react';
import {ACCESS_TOKEN} from "../constants/api";

export const authHoc = (ComposeComponent, ComponentWithoutAuth) => {
  class Authenticate extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth = () => {
      const isLoggedIn = localStorage.getItem(ACCESS_TOKEN);

      if (!isLoggedIn) {
        this.props.history.replace("/");
      }
    };

    render() {
      const isLoggedIn = localStorage.getItem(ACCESS_TOKEN);

      return isLoggedIn ? <ComposeComponent {...this.props}/> : <ComponentWithoutAuth/>
    }
  }

  return Authenticate;
};


