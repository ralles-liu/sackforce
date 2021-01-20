import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import Greeting from "./greeting"


const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mdtp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }   
}

export default connect(mstp, mdtp)(Greeting)