import React from "react"
import {Link} from "react-router-dom"
import { Redirect } from "react-router-dom";
import {addUserModalContainer} from "../modal/add_user_modal_container"

export default class ChannelMainHeader extends React.Component {


    constructor(props) {
        super(props)
    }
    
    displayModal(type) {
        return e => this.props.openModal(type)
    }
    
    render() {
        
        if (Object.keys(this.props.userChannels).length > 0) {
            
            let channel = this.props.userChannels[this.props.currChannel]
            
            
            
            return (
            
                <nav id="channel-nav-header">
                    <div id='left-side'>
                        <h1 id="name">{channel.name}</h1>
                        <h2 id="description">{channel.description}</h2>
                    </div>
    
                    <div id='right-side'>
                        <i onClick={this.displayModal("addUsers")}className="fas fa-user-plus"></i>
                        <i className="fas fa-info-circle"></i>
                        <addUserModalContainer />
    
    
                    </div>
    
    
                </nav>
                
    
            )
        } else {
            return null
        } 
   
    }
    
}


