import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import NewHomepage from "./new_homepage"
// import {openModal} from "../../actions/modal_actions"
import {createChannel} from "../../actions/channel_actions"


const mstp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        userChannels: state.entities.channels,
        // currChannel: ownProps.match.params.channelId
    }
}
    
const mdtp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        // login: (user) => dispatch(login(user))
        createChannel: (channel) => dispatch(createChannel(channel)),
    }   
}

export default connect(mstp, mdtp)(NewHomepage)