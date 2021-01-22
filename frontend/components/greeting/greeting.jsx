import React from "react"
import {Link} from "react-router-dom"
import Landing from "./landing"

// basically whatever you pass in the {} are the props
const Greeting = ({currentUser, logout}) => {
    // console.log(currentUser)
    console.log(logout)
    if (currentUser) {
        return (
            <div>
                <h1>Welcome {currentUser.display_name}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <Landing />

        )
    }
}

export default Greeting