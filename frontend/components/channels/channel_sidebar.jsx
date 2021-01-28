import React from "react"
import {Link} from "react-router-dom"
import { Redirect } from "react-router-dom";

const ChannelSidebar = ({userChannels, currChannel, hidden}) => {
    
    if (hidden) {
        console.log("are we ever hidden")
        return null
    }

    let channelList = Object.keys(userChannels).map((key, index) => {
        

        let icon
        if (userChannels[key].public) {
            // this means its public so display a hashtag icon
            icon = <i className="fas fa-hashtag"></i>
        } else {
            icon = <i className="fas fa-lock"></i>
        }

        let highlight
        if (key === currChannel) {
            highlight = "selected"
        } else {
            highlight = ""
        }
     
        return (
            <li className={highlight} id={`channel-${key}`} key={index}>
                <Link to={`/user/${key}`}>
                    {/* eventually the icon has to be a button */}
                    {icon} &nbsp; {userChannels[key].name} 
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

export default ChannelSidebar