import * as APIUtil from '../util/channels_api_util';



export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"



const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const removeChannel = (channelId) => {
    return {
        type: REMOVE_CHANNEL,
        channelId
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

export const createChannel = (channel) => dispatch => {
    return (
        APIUtil.createChannel(channel).then(
            channel => dispatch(receiveChannel(channel))
        )
    )
}

export const deleteChannel = (channelId) => dispatch => {
    return (
        APIUtil.deleteChannel(channelId).then(
            () => dispatch(removeChannel(channelId))
        )
    )
}

