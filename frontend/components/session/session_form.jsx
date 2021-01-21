import React from "react"

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        // assign a copy of the state just in case so we don't modify it
        let user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        const errors = this.props.errors.map((error, i) => {
            return (
                // this key might not be good enough
                <li key={i}>
                    {error}
                </li>
            )
        })

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    Welcome to Sackforce
                    <br/>
                    Please {this.props.formType} or {this.props.link}
                    <ul>{errors}</ul>
                    <br/>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" value={this.state.username} onChange={this.update('username')}/>
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" value={this.state.password} onChange={this.update('password')}/>
                    <br/>
                    <button type="submit" value={this.props.formType}>{this.props.formType}</button>
 
                </form>
            </>
        )
    }
}