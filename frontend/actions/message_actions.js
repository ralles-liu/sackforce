import * as APIUtil from "../util/messages_api_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGES = "REMOVE_MESSAGES"

const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

const receiveMessage = (message) => {
   
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const removeMessages = () => {
    console.log('trying to remove messages')
    return {
        type: REMOVE_MESSAGES
    }
}


export const fetchMessages = (channelId) => dispatch => {
    return (
        APIUtil.fetchMessages(channelId).then(
            messages => dispatch(receiveMessages(messages))
        )
    )
}

export const sendMessage = (channelId, message) => dispatch => {
    return (
        APIUtil.sendMessage(channelId, message).then(
            message => dispatch(receiveMessage(message))
        )
    )
}