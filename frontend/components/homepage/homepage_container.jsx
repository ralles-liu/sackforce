import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import Homepage from "./homepage"
import {openModal} from "../../actions/modal_actions"


const mstp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}
    
const mdtp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        // login: (user) => dispatch(login(user))
        openModal: () => dispatch(openModal("homepage"))
    }   
}

export default connect(mstp, mdtp)(Homepage)