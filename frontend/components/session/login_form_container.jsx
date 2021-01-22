import {connect} from "react-redux"
import LoginForm from "./login_form"
import React from "react"
import {login, clearErrors} from "../../actions/session_actions"


const mstp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "Log in to Sackforce",
    }
}

const mdtp = (dispatch, ownProps) => {
    return { 
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mstp, mdtp)(LoginForm)