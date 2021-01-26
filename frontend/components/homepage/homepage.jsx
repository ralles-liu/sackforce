import React from "react"
import {Link} from "react-router-dom"

import HomepageModalContainer from "../modal/homepage_modal_container"

// basically whatever you pass in the {} are the props
export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.displayModal = this.displayModal.bind(this)
    }

    displayModal(e) {
        this.props.openModal()
    }

    // console.log(currentUser)
    render() { 
        return (    

            <div id="homepage-container">
                <header id="homepage-header">
                    <div id="searchbar">
                        <i className="far fa-clock"></i>
                        <input id="search-input" type="text" placeholder="Search Sackforce"/>
                        <i className="far fa-question-circle"></i>
                    </div>

                    <div id="profile-nav">
                        <button id='profile-button' onClick={this.displayModal}>{this.props.currentUser.display_name[0].toUpperCase()}</button>
                        <HomepageModalContainer />

                    </div>



                </header>
          

            </div>
            
        )
    }
}
