import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import LiveChat from "./live_chat"
import {sendMessage, removeMessages} from "../../actions/message_actions"


const mstp = (state) => {
    return {
        messages: state.entities.messages,
        channels: state.entities.channels,
        state: state
    }
}
    
const mdtp = (dispatch) => {
    return {
        sendMessage: (channelId, message) => dispatch(sendMessage(channelId, message)),
        removeMessages: () => dispatch(removeMessages())
    }   
}

export default connect(mstp, mdtp)(LiveChat)