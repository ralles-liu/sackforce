import React from "react"
import { Redirect } from "react-router-dom"



export default class AddUserModal extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = {
            admin_id: this.props.currentUser.id,
            name: "",
            description: "",
            public: false,
            // redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        this.props.closeModal()
    }

    handleSubmit(e) {
        e.preventDefault()
        let channel = Object.assign({}, this.state)
        // delete channel.redirect
        this.props.createChannel(channel)    
        this.props.closeModal()
        
        
        
    }

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {

        if (this.props.modal === "navChannel") {
            return (
                <div id = "channel-modal-background" onClick={this.props.closeModal}>
                    <div id="channel-modal" onClick={e => e.stopPropagation()}>
                        <div id="header">
                            <p id='title'>Create a Channel</p>
                            <p id='description'>Please fill in the information below to create a channel. You can add friends after the channel has been created</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Enter a channel name</label>
                            
                            <input id="name" type="text" value={this.state.name} onChange={this.update('name')} placeholder="  wsb fanclub"/>
                            <br/>
                            <label htmlFor="description">Describe the channel</label>
                            
                            <input id="description" type="text" value={this.state.description} onChange={this.update('description')} placeholder='  discuss wsb "strategies" '/>
                            
                            <button type="submit" >Create Channel</button>
                            
                        </form>

                    </div>
                    
                </div>
            )

        } else {
            return null
        }
    }
}