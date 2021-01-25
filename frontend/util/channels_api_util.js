


export const fetchChannels = () => {
    console.log("in the api util")
    return $.ajax({
        url: "/api/channels",
        method: "GET"
    })
}


