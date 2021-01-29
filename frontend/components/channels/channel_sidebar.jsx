import React from "react"
import {Link} from "react-router-dom"
import { Redirect } from "react-router-dom";

export default class ChannelSidebar extends React.Component {
    
    constructor(props) {
        super(props)

       this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.removeMessages()
    }
    
    componentDidUpdate() {
        console.log(`fetching message for ${this.props.currChannel}`)
        // this.props.removeMessages()
        this.props.fetchMessages(this.props.currChannel)
    }

    render() {
        if (this.props.hidden) {
            return null
        }

        let channelList = Object.keys(this.props.userChannels).map((key, index) => {

            let icon
            if (this.props.userChannels[key].public) {
                // this means its public so display a hashtag icon
                icon = <i className="fas fa-hashtag"></i>
            } else {
                icon = <i className="fas fa-lock"></i>
            }

            let highlight
            if (key === this.props.currChannel) {
                highlight = "selected"
            } else {
                highlight = ""
            }
        
            return (
                <li className={highlight} id={`channel-${key}`} key={key} onClick={this.handleClick}>
                    <Link to={`/user/${key}`}>
                        {/* eventually the icon has to be a button onClick={this.handleClick} */}
                        {icon} &nbsp; {this.props.userChannels[key].name} 
                    </Link>
                </li>
            )
        })   

        return (
            <ul id='channel-list-container'>
                {channelList}
            </ul>
        )
    }
}

