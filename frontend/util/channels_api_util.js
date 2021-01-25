
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
        data: {id: channelId}
    })
}

