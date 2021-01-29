import React from "react"
import {Link} from "react-router-dom"


export default class LiveChat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.change = this.change.bind(this)
    }


    handleSubmit() {
        e.preventDefault()
        this.props.sendMessage(this.props.currChannelId, this.state.message)
        this.setState({message: ""})
    }

    change(e) {
        window.e = e
        this.setState({message: e.currentTarget.value})
    }

    render() {
        let channel = this.props.channels[this.props.currChannelId]
        
        
        let messageList = Object.keys(this.props.messages).map((key, i) => {
            let sender = this.props.messages[key].user_id
            let name = ""
            if (channel) {
                name = channel.users[sender].display_name            
            } 
            

            
            
            
            return (
                <li className="chat" id={key} key={i}>
                    <div id="display-letter">{name[0]}</div>
                    <div id="display-name">{name}:</div>
                    <p>{this.props.messages[key].message}</p>

                </li>
            )
        
        })


        return(
            <div id="messages-container">
                <div id="list-of-messages">
                    <ul>
                        {messageList}
                    </ul>
                </div>

                <div id="send-message-container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="message-box" value={this.state.message} onChange={this.change}/>
                        <button type="submit" >Send Message</button>


                    </form>
                </div>
            </div>
                 
        )
    }
}
