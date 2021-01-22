import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions"


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return []
        case RECEIVE_ERRORS:
            // should we be appending or replacing?
            // according to directions its replace
            return action.errors
        case CLEAR_ERRORS:
            return []
        default: 
            return state
    }
}

export default sessionErrorsReducer