import React from "react"
import {connect} from "react-redux"
import { Route, Redirect, withRouter } from 'react-router-dom';


const mstp = state => (
    {loggedIn: Boolean(state.session.id)}
)

const Auth = ({component: Component, path, exact, loggedIn}) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )
    )}
    />
)

export const AuthRoute = withRouter(connect(mstp)(Auth));