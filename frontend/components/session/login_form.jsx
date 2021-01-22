import React from "react"
import {Link} from "react-router-dom";

export default class LoginForm extends React.Component {
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
    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {
        const errors = this.props.errors.map((error, i) => {
            return (
                // this key might not be good enough
                <div className="login-error" key={i}>
                    {error}                    
                </div>
            )
        })
        
        
        return (

                <div id="session-creation">
                    <header> 
                        <Link to="/">
                            <img src={window.bdcLogoURL} alt="sackforce logo" className="sackforce-logo"/>
                            <span className="sackforce-name">sackforce</span>
                        </Link>
                        <nav>
                            <span>New to Sackforce?</span>
                            <div id="link-to-create">
                                <Link to="/signup">
                                    Please create an account
                                </Link>
                            </div>
                            
                        </nav>
                    </header>
                    <div id="session-form-body">
                        <h1>{this.props.formType}</h1>
                        <span>Continue with your email and password to sign in.</span>
                        <form onSubmit={this.handleSubmit}>
                        
                            
                            
                            
                            {/* <label htmlFor="username">Username: </label> */}
                            <input id="username" type="text" value={this.state.username} onChange={this.update('username')} placeholder="  name@company.com"/>
                            <br/>
                            <input id="password" type="password" value={this.state.password} onChange={this.update('password')} placeholder="  at least six characters"/>
                            <br/>
                            <button type="submit" value={this.props.formType}>Log in with email</button>
                            <br/>
                            {errors}
                        </form>     
                    </div>
                    <footer>
                        <span>Site for skill demonstration only</span>
                        <a href="https://www.linkedin.com/in/ralles-liu/">
                            <img src={window.linkedinLogoURL} alt="linkedin logo"/>
                        </a>
                        <a href="https://github.com/ralles-liu/">
                            <img src={window.githubLogoURL} alt="github logo"/>
                        </a>
                        

                    </footer>
                </div>    
        )
    }
}