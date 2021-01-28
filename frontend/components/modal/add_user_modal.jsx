import React from "react"
import { Redirect } from "react-router-dom"



export default class AddUserModal extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            username: ""
            // redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        this.props.closeModal()
    }

    handleSubmit(e) {
        e.preventDefault()
        let user = Object.assign({}, this.state)
        // delete channel.redirect
        console.log(user.username)
        console.log(this.props.currChannelId)
        this.props.addUser(this.props.currChannelId, user.username)    
        this.props.closeModal()
        
        
        
    }

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {

        if (this.props.modal === "addUser") {
            return (
                <div id = "add-user-background" onClick={this.props.closeModal}>
                    <div id="add-user-modal" onClick={e => e.stopPropagation()}>
                        <div id="header">
                            <p id='title'>Add a user to channel</p>
                            
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="username">Enter a username to add them</label>
                            
                            <input id="username" type="text" value={this.state.username} onChange={this.update('username')} />
                            
                            <button type="submit" >Add User</button>
                            
                        </form>

                    </div>
                    
                </div>
            )

        } else {
            return null
        }
    }
}