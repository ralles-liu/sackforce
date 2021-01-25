import {RECEIVE_CHANNELS} from "../actions/channel_actions"


const channelsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CHANNELS:
            console.log(action.channels)
            return Object.assign({}, state, action.channels)
        default:
            return state
    }
}

export default channelsReducer