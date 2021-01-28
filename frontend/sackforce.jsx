import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
// a little confusing that there are two seperate login functions
import {login, logout, signup} from "./actions/session_actions"
import Root from "./components/root"
import { fetchChannels, createChannel, deleteChannel, deleteUserFromChannel, updateChannel, addUserToChannel } from "./actions/channel_actions";
import * as Test from "./util/channels_api_util"

window.fetchChannels = fetchChannels
window.createChannel = createChannel
window.deleteChannel = deleteChannel
window.deleteUserFromChannel = deleteUserFromChannel
window.updateChannel = updateChannel
window.addUserToChannel = addUserToChannel
window.testFetch = Test.fetchChannels
window.signup = signup
window.login = login
window.logout = logout

document.addEventListener("DOMContentLoaded", () => {

    let store

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser},
            },
            session: {
                id: window.currentUser.id
            }
        }
        store = configureStore(preloadedState)
        fetchChannels()(store.dispatch)
        delete window.currentUser
    } else {
        store = configureStore()
    }

    window.getState = store.getState
    window.dispatch = store.dispatch
    

    
    const root = document.getElementById("root")
    ReactDOM.render(<Root store = {store}/>, root)
})