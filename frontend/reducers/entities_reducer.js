import {combineReducers} from "redux"

// it seems like we can call it something else do to the export default
import usersReducer from "./users_reducer"
import channelsReducer from "./channels_reducer"
import messagesReducer from "./messages_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    messages: messagesReducer,
})

export default entitiesReducer