import React from "react"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import App from "./app"


// how exactly is this being passed in? seems you need brackets why
const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}

export default Root;