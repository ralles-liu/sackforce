import React from "react"
import {Link} from "react-router-dom";

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display_name: "",
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }
    handleDemo(e) {
        e.preventDefault()
        const user = {
            username: "demo@gmail.com",
            password: "demopassword"
        }
        this.props.login(user)
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
                            <span>Already have an account?</span>
                            <div id="link-to-create">
                                <Link to="/login">
                                    Please log in
                                </Link>
                            </div>
                            <div id='link-to-demo' onClick={this.handleDemo}>
                                Or use our demo login
                            </div>
                            
                        </nav>
                    </header>
                    <div id="session-form-body">
                        <h1>{this.props.formType}</h1>
                        <span>Please provide a name, email, and password to create an account</span>
                        <form onSubmit={this.handleSubmit}>
                        
                            
                            
                            <input id="display-name" type="text" value={this.state.display_name} onChange={this.update('display_name')} placeholder="  mina"/>
                            <br/>                            
                            <input id="username" type="text" value={this.state.username} onChange={this.update('username')} placeholder="  name@company.com"/>
                            <br/>
                            <input id="password" type="password" value={this.state.password} onChange={this.update('password')} placeholder="  at least six characters"/>
                            <br/>
                            <button type="submit" value={this.props.formType}>Create an account</button>
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