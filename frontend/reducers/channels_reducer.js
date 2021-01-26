import {RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_actions"


const channelsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.channels)
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {[action.channel.id]: action.channel})
        case REMOVE_CHANNEL:
            let newState = Object.assign({}, state)
            // console.log('remove channel reducer')
            // console.log(action)
            
            delete newState[action.channelId]
            return newState
        default:
            return state
    }
}

export default channelsReducer