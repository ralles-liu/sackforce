import React from "react"



export default class HomepageModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        this.props.closeModal()
    }

    render() {

        if (this.props.modal === "homepage") {
            return (
                <div id = "homepage-modal-background" onClick={this.props.closeModal}>
                    <div id="homepage-modal" onClick={e => e.stopPropagation()}>
                        <div id="top-level">
                            <div id='icon'>{this.props.currentUser.display_name[0].toUpperCase()}</div>
                            {this.props.currentUser.display_name}
                        </div>
                        
                        <button id="bottom-level" onClick={this.props.logout}>Log out of Sackforce</button>

                    </div>
                    
                </div>
            )

        } else {
            return null
        }
    }
}