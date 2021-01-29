import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import LiveChat from "./live_chat"
import {sendMessage} from "../../actions/message_actions"


const mstp = (state) => {
    return {
        messages: state.entities.messages,
        channels: state.entities.channels,
        state: state
    }
}
    
const mdtp = (dispatch) => {
    return {
        sendMessage: (channelId, message) => dispatch(sendMessage(channelId, message))
        // logout: () => dispatch(logout()),
        // // login: (user) => dispatch(login(user))
        // openModal: (type) => dispatch(openModal(type))
    }   
}

export default connect(mstp, mdtp)(LiveChat)