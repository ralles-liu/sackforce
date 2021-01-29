import React from "react"
import {Link} from "react-router-dom"
import ChannelSidebar from "../channels/channel_sidebar"
import HomepageModalContainer from "../modal/homepage_modal_container"
import ChannelModalContainer from "../modal/channel_modal_container"
import ChannelMainHeader from "../channels/channel_main_header"
import LiveChatContainer from "../chat/live_chat_container"


// basically whatever you pass in the {} are the props
export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.displayModal = this.displayModal.bind(this)
        this.state = {hidden: false}
        this.expandChannel = this.expandChannel.bind(this)
    }

    displayModal(type) {
        return e => this.props.openModal(type)
    }

    expandChannel(e) {
        if (this.state.hidden) {
            this.setState({hidden: false})
        } else {
            this.setState({hidden: true})
        }
    }

    componentDidMount() {
        console.log(`fetching message in homepage for ${this.props.currChannel}`)
        this.props.fetchMessages(this.props.currChannel)
        
    }

    // componentDidUpdate() {
    //     // console.log(`fetching message in homepage for ${this.props.currChannel}`)
    //     this.props.fetchMessages(this.props.currChannel)
        
    // }

    // componentDidUpdate() {
    //     this.props.removeMessages()
    // }


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
                        <button id='profile-button' onClick={this.displayModal("homepage")}>{this.props.currentUser.display_name[0].toUpperCase()}</button>
                        <HomepageModalContainer />
                    </div>
                </header>

                <div id="main-body">
                    <div id="border-in-container" />

                    {/* this sidebar will render a channel component */}
                    <div id="sidebar">
                        <div id="nav-header">
                            <h2 id="display-name">
                                {this.props.currentUser.display_name}
                            </h2>
                            {/* eventually this needs to be a button */}
                            <i className="far fa-edit"></i>

                        </div>
                        
                        <div id="channel-header">
                            <h1 onClick={this.expandChannel}>Channels</h1>
                            <i onClick={this.displayModal("navChannel")} className="fas fa-plus"></i>
                            <ChannelModalContainer />


                        </div>
                        {/* to hide you need a property that gets passed in if its clicked */}
                        <ChannelSidebar fetchMessages={this.props.fetchMessages} removeMessages={this.props.removeMessages} hidden={this.state.hidden} userChannels={this.props.userChannels} currChannel = {this.props.currChannel}/>
                        
                    </div>
                    

                    <div id="chat-container">
                        <ChannelMainHeader userChannels={this.props.userChannels} currChannel={this.props.currChannel} openModal={this.props.openModal}/>
                        <LiveChatContainer currChannelId={this.props.currChannel} />
                        
                    </div>

                </div>

            </div>
            
        )
    }
}
