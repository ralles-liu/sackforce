import React from "react"
import {connect} from "react-redux"
import {closeModal} from "../../actions/modal_actions"
import HomepageModal from "./homepage_modal"
import {logout} from "../../actions/session_actions"

const mstp = state => {
    return {
        modal: state.ui.modal,
        currentUser: state.entities.users[state.session.id]
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        
    }
}


export default connect(mstp, mdtp)(HomepageModal)