import React from "react"
import {Link} from "react-router-dom"


// basically whatever you pass in the {} are the props
const Homepage = ({currentUser, logout}) => {
    // console.log(currentUser)
    return (    

        <div id="homepage-container">
            <header id="homepage-header">
                <div id="searchbar">
                    <i className="far fa-clock"></i>
                    <input id="search-input" type="text" placeholder="Search Sackforce"/>
                    <i className="far fa-question-circle"></i>
                </div>

                <div id="profile-nav">
                    <button id='profile-button'>{currentUser.display_name[0].toUpperCase()}</button>
                    

                </div>


            </header>
            <div>
                <h1>Welcome {currentUser.display_name}</h1>
                <button onClick={logout}>Logout</button>
            </div>

        </div>
           
    )

}

export default Homepage