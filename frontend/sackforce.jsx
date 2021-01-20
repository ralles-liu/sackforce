import React from "react";
import ReactDOM from "react-dom";
// import {signup, login, logout} from "./util/session_api_util"
import configureStore from "./store/store"
// a little confusing that there are two seperate login functions
import {login} from "./actions/session_actions"


// window.signup = signup
// window.login = login
// window.logout = logout

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore()
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login

    const root = document.getElementById("root")
    ReactDOM.render(<h1>Welcome to Sackforce</h1>, root)


})