import React from "react"
import {Link} from "react-router-dom"
import { Redirect } from "react-router-dom";


// basically whatever you pass in the {} are the props
export default class NewHomepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin_id: this.props.currentUser.id,
            name: "",
            description: "",
            public: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let channel = Object.assign({}, this.state)
        // delete channel.redirect
        this.props.createChannel(channel)
        
    }

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
        }
    }

    render() { 
        // eventually add option to join a channel first instead of creating one
        
        if (Object.keys(this.props.userChannels).length > 0) {
            let channelId = Object.keys(this.props.userChannels)[0]
            return (
                <Redirect to={`/user/${channelId}`} />
            )
        }

        return (
            <div id = "new-homepage-background">
                <div id="new-homepage-modal" >
                    <div id="header">
                        <p id='title'>Thank you for choosing Sackforce</p>
                        <p id='description'>You currently don't have any channels. Please fill in the information below to create a channel. You can add friends after the channel has been created</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Enter a channel name</label>
                        
                        <input id="name" type="text" value={this.state.name} onChange={this.update('name')} placeholder="  wsb fanclub"/>
                        
                        <label htmlFor="description">Describe the channel</label>
                        
                        <input id="description" type="text" value={this.state.description} onChange={this.update('description')} placeholder='  discuss wsb "strategies" '/>
                        
                        <button type="submit" >Create Channel</button>
                        
                    </form>

                </div>
                
            </div>
        )
        
        
    }
}