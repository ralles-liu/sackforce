import React from "react"
import {Link} from "react-router-dom"

// basically whatever you pass in the {} are the props
const Greeting = ({currentUser, logout}) => {
    // console.log(currentUser)
    console.log(logout)
    if (currentUser) {
        return (
            <div>
                <h1>Welcome {currentUser.username}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        console.log("i am logged out")
        console.log(currentUser)
        return (
            <div>
                <Link to="/login">
                    <button type="button">Login</button>
                </Link>
                <Link to="/signup">
                    <button type="button">Signup</button>
                </Link>
            </div>
        )
    }
}

export default Greeting