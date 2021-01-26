import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal_actions"


const modalReducer = (state=null, action) => {
    Object.freeze(state)
    console.log("i am in the reducer")
    switch(action.type) {
        case OPEN_MODAL:
            return action.modal
        case CLOSE_MODAL:
            console.log("trying to close in the reducer")
            return null
        default:
            return state
    }



}


export default modalReducer