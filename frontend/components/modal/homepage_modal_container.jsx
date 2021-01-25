import React from "react"
import {connect} from "react-redux"
import closeModal from "../../actions/modal_actions"
import HomepageModal from "./homepage_modal"

const mstp = state => {
    return {
        modal: state.ui.modal
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal)
    }
}


export default connect(mstp, mdtp)(HomepageModal)