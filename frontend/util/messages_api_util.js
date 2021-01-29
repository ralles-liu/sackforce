
export const fetchMessages = (channelId) => {
    return $.ajax({
        url: "/api/messages",
        method: "GET",
        data: {channelId}
    })
}

export const sendMessage = (channelId, message) => {
    return $.ajax({
        url: "/api/messages",
        method: "POST",
        data: {channelId, message}
    })
}