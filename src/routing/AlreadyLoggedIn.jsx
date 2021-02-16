import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'
const { Route, Redirect } = require("react-router-dom");

export default class AlreadyLoggedIn extends Component {
    state={
        email: sessionStorage.getItem('username'),
    }
    render() {
        let user = this.state.email;
        if(AuthenticationService.isUserLoggedIn()){
            return <Redirect to={`/home/${user}`}/>
        }
        else{
           return <Route {...this.props}/>
        }
    }
}
