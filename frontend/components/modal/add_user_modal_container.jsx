import React from "react"
import {connect} from "react-redux"
import {closeModal} from "../../actions/modal_actions"
import AddUserModal from "./add_user_modal"
import {logout} from "../../actions/session_actions"
import {createChannel} from "../../actions/channel_actions"

const mstp = state => {
    return {
        modal: state.ui.modal,
        currentUser: state.entities.users[state.session.id],
        currChannelId: state.session.channelId
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createChannel: (channel) => dispatch(createChannel(channel)),
        
        
    }
}


export default connect(mstp, mdtp)(AddUserModal)