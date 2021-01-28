import * as APIUtil from '../util/channels_api_util';



export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"
export const REMOVE_USER = "REMOVE_USER"
export const RECEIVE_USER = "RECEIVE_USER"



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

const removeUser = (channelId, userId) => {
    return {
        type: REMOVE_USER,
        channelId,
        userId
    }
}

const receiveUser = (channelId, user) => {
    return {
        type: RECEIVE_USER,
        channelId,
        user
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

export const deleteUserFromChannel = (channelId, userId) => dispatch => {
    return (
        APIUtil.deleteUserFromChannel(channelId, userId).then(
            () => dispatch(removeUser(channelId, userId))
        )
    )
}

export const updateChannel = (channel) => dispatch => {
    return (
        APIUtil.updateChannel(channel).then(
            channel => dispatch(receiveChannel(channel))
        )
    )
}

export const addUserToChannel = (channelId, username) => dispatch => {
    return (
        APIUtil.addUserToChannel(channelId, username).then(
            user => dispatch(receiveUser(channelId, user))
        )
    )
}