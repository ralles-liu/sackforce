import React from "react"
import GreetingContainer from "./greeting/greeting_container"
// import {Route} from "react-router-dom"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import {AuthRoute} from "../util/route_util"

const App = () => {

    return (
        <>
            <header>
                <h1>Sackforce</h1>
                <GreetingContainer />
            </header>
            <AuthRoute exact path="/login" component= {LoginFormContainer}/>
            <AuthRoute exact path="/signup" component= {SignupFormContainer}/>                

        </>
    )
}

export default App