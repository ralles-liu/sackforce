import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions"
import {RECEIVE_CHANNEL} from "../actions/channel_actions"
const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.results.user.id}
        case LOGOUT_CURRENT_USER:
            return {id: null}
        case RECEIVE_CHANNEL:
            let newState = Object.assign({}, state)
            newState.channelId = action.channel.id
            return newState
        default:
            return state
    }
}


export default sessionReducer;