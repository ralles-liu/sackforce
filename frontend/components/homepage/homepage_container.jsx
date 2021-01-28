import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import Homepage from "./homepage"
import {openModal} from "../../actions/modal_actions"


const mstp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        userChannels: state.entities.channels,
        currChannel: ownProps.match.params.channelId
    }
}
    
const mdtp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        // login: (user) => dispatch(login(user))
        openModal: (type) => dispatch(openModal(type))
    }   
}

export default connect(mstp, mdtp)(Homepage)