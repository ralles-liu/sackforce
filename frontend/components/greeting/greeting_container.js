import {connect} from "react-redux"
import {logout, login} from "../../actions/session_actions"
import Greeting from "./greeting"


const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels, 
        channelIds: Object.keys(state.entities.channels)
    }
}
    
const mdtp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user))
    }   
}

export default connect(mstp, mdtp)(Greeting)