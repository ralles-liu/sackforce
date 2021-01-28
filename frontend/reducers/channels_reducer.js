import {RECEIVE_CHANNELS, 
    RECEIVE_CHANNEL, 
    REMOVE_CHANNEL, 
    REMOVE_USER, 
    RECEIVE_USER} from "../actions/channel_actions"

import {RECEIVE_CURRENT_USER} from "../actions/session_actions"

const channelsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.channels)
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {[action.channel.id]: action.channel})
        case REMOVE_CHANNEL:
            let newState = Object.assign({}, state)           
            delete newState[action.channelId]
            return newState
        case REMOVE_USER: 
            let newState2 = Object.assign({}, state)
            delete newState2[action.channelId].users[action.userId]
            return newState2
        case RECEIVE_USER:  
            let newState3 = Object.assign({}, state)
            newState3[action.channelId].users[action.user.id] = action.user  
            return newState3
        case RECEIVE_CURRENT_USER:
            console.log("trying to create channels")
            return Object.assign({}, state, action.channels)

        default:
            return state
    }
}

export default channelsReducer