import React from "react"
import GreetingContainer from "./greeting/greeting_container"
import HomepageContainer from "./homepage/homepage_container"
import {Route} from "react-router-dom"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import {AuthRoute, ProtectedRoute} from "../util/route_util"
import NewHomepageContainer from "./homepage/new_homepage_container"

const App = () => {
    // NEED TO FIGURE OUT ROUTES MORE, i can selectively give things class names
    return (
        <>
            {/* <h1>Sackforce</h1> */}
            {/* eventually this will be protected so you cant even access this unless ur logged out */}
            <Route exact path ="/" component={GreetingContainer} />
            {/* eventually need to protect this */}
            <Route exact path ="/user" component={NewHomepageContainer} />
            <ProtectedRoute path ="/user/:channelId" component={HomepageContainer} />
            <AuthRoute exact path="/login" component= {LoginFormContainer}/>
            <AuthRoute exact path="/signup" component= {SignupFormContainer}/>                

        </>
    )
}

export default App