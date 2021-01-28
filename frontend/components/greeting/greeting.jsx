import React from "react"
import {Link} from "react-router-dom"
import Landing from "./landing" 
import { Redirect } from "react-router-dom";

// basically whatever you pass in the {} are the props
const Greeting = ({currentUser, channels, channelIds, logout, login}) => {
    
    
    if (currentUser) {
        if (channelIds.length === 0) {
            
            console.log("THIS USER HAS NO CHANNELS AND YOU NEED TO RENDER A SPECIAL FORM IN THIS CASE")
            
            return (
                <Redirect to={`/user`} />
            )
        }

        
        return (
            // need to decide which CHANNLE I DEFAULT SHOW, just the first one?
            // perhaps it has to be saved in the databse as a user property
            <Redirect to={`/user/${channelIds[0]}`} />
            // <div>
            //     <h1>Welcome {currentUser.display_name}</h1>
            //     <button onClick={logout}>Logout</button>
            // </div>   
        )
    } else {
        console.log("trying to login")
        return (
            <Landing login={login}/>

        )
    }
}

export default Greeting