import {RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGES} from "../actions/message_actions"

const messagesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_MESSAGES:
            return action.messages
        case REMOVE_MESSAGES:
            return {}
        case RECEIVE_MESSAGE:
            let newState = Object.assign({}, state, action.message)
            return newState

        default: 
            return state
    }
}




export default messagesReducer