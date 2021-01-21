import {connect} from "react-redux"
import SessionForm from "./session_form"
import React from "react"
import {login} from "../../actions/session_actions"
import {Link} from "react-router-dom"

const mstp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login",
        link: <Link to="/signup">Signup</Link>
    }
}

const mdtp = (dispatch, ownProps) => {
    return { 
        processForm: user => dispatch(login(user))
    }
}

export default connect(mstp, mdtp)(SessionForm)