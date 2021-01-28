
export const fetchChannels = () => {
    return $.ajax({
        url: "/api/channels",
        method: "GET"
    })
}

export const createChannel = (channel) => {
    console.log('creating channel')
    return $.ajax({
        url: "api/channels",
        method: "POST",
        data: {channel}
    })
}


export const deleteChannel = (channelId) => {
    return $.ajax({
        url: `api/channels/${channelId}`,
        method: "DELETE",
        data: {channelId}
    })
}

export const deleteUserFromChannel = (channelId, userId) => {
    console.log("trying to delete something")
    return $.ajax({
        url: `api/channels/${channelId}`,
        method: "DELETE",
        data: {channelId, userId}
    })
}

export const updateChannel = (channel) => {
    return $.ajax({
        url: `api/channels/${channel.id}`,
        method: "PATCH",
        data: {channel}
    })
}


export const addUserToChannel = (channelId, userId) => {
    return $.ajax({
        url: `api/channels/${channelId}`,
        method: "PATCH",
        data: {channelId, userId}
    })
}