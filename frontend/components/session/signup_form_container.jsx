import React from "react"
import {connect} from "react-redux"
import SessionForm from "./session_form"
import {signup} from "../../actions/session_actions"
import {Link} from "react-router-dom"

const mstp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "Sign up for Sackforce",
        link: <Link to="/login">Login</Link>
    }
}

const mdtp = (dispatch, ownProps) => {
    return { 
        processForm: user => dispatch(signup(user))
    }
}

export default connect(mstp, mdtp)(SessionForm)