import * as APIUtil from '../util/channels_api_util';



export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";


const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

// ADD IN ERRORS TO THE THEN LATER
export const fetchChannels = () => dispatch => {
    return (
        APIUtil.fetchChannels().then(
            channels => dispatch(receiveChannels(channels))
        )
    )
}