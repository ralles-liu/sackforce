// need to do this otherwise there is conflict with naming the thunks login, logout, signup
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// need to better understand the use of errors
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

// im assuming errors is going to be a list
const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

// what's returned from the Ajax is just {id: 1, username: ralles} I believe
export const login = (user) => (dispatch) => {
    return (
        APIUtil.login(user).then(
            user => dispatch(receiveCurrentUser(user)),
            // this is executed if our Ajax fails (aka we g et some errors)
            // apparently necessary to convert the AJAX return into a JSON
            // we don't need it above because our extract creates the JSON for us
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
    )
}

export const logout = () => dispatch => {
    return (
        APIUtil.logout().then(
            () => dispatch(logoutCurrentUser()),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
    )
}

export const signup = (user) = dispatch => {
    return (
        APIUtil.signup(user).then(
            user => dispatch(receiveCurrentUser(user),
            errors => dispatch(receiveErrors(errors.responseJSON))
            )
        )
    )
}