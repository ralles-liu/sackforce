import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
// a little confusing that there are two seperate login functions
import {login} from "./actions/session_actions"
import Root from "./components/root"
import { fetchChannels, createChannel, deleteChannel } from "./actions/channel_actions";


window.fetchChannels = fetchChannels
window.createChannel = createChannel
window.deleteChannel = deleteChannel

// window.signup = signup
// window.login = login
// window.logout = logout

document.addEventListener("DOMContentLoaded", () => {

    let store

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            }
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }

    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login
    window.testUser = {username: "ralles", password: "bluedresscapital"}

    const root = document.getElementById("root")
    ReactDOM.render(<Root store = {store}/>, root)
})