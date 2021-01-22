import React from "react"
import {connect} from "react-redux"
import SignupForm from "./signup_form"
import {signup, clearErrors} from "../../actions/session_actions"
import {Link} from "react-router-dom"

const mstp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "Sign up for Sackforce",
    }
}

const mdtp = (dispatch, ownProps) => {
    return { 
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mstp, mdtp)(SignupForm)  