import React from "react"
import {Link} from "react-router-dom"





// THIS IS WHERE THE WELCOME DEFAULT PAGE IS
export default class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.handleDemo = this.handleDemo.bind(this)
    }

    handleDemo(e) {
        e.preventDefault
        const user = {
            username: "demo@gmail.com",
            password: "demopassword"
        }
        this.props.login(user)
    }

    render() {
        return (
            <div id="landing-container">
                <header id="landing-header">
                    <nav id="nav-container">
                        <div id="logo">
                            <Link to="/">
                                <img src={window.bdcLogoURL} alt="sackforce logo" className="sackforce-logo"/>
                                <span className="sackforce-name">sackforce</span>
                            </Link>
                        </div>
                        <nav id="nav-bar">
                            <ul id="nav-level1">
                                <li>
                                    
                                    <a href="https://www.linkedin.com/in/ralles-liu/">
                                        LinkedIn
                                    </a>    
                                </li>
                                <li>
                                    <a href="https://github.com/ralles-liu/">
                                        Github
                                    </a>
                                </li>
                                
                            </ul>
                            <div id="right-nav">
                                <Link to="/login">
                                    <button type="button" id="login-button">Login</button>
                                </Link>
                                <Link to="/signup">
                                    <button type="button" id="signup-button">Create an account</button>
                                </Link>
                            </div>

                        </nav>

                    </nav>
                </header>
                <section id="first-section">
                    <div id='intro-text'>
                        <h1>Welcome to Sackforce</h1>
                        <p>
                            Stay in touch with your friends, family, and coworkers with Sackforce &mdash; 
                            the premier messaging app 
                        </p>
                        <Link to="/signup">
                            <button type="button" id="section-signup-button">Create an account</button>
                        </Link>
                        <br/>

                        <button onClick={this.handleDemo} type="button" id="section-demo-button">Demo user</button>
                 
                        
                    </div>
                    <img id="chatting-image"src={window.chattingURL}alt="chatting"/>
                </section>
                <section id="second-section">
                    <img id="app-image"src={window.appPhotoURL}alt="app-photo"/>
                    <div id='descriptive-text'>
                        <div id="images-bar">
                            <i className="fas fa-comments"></i>
                            <i className="fas fa-basketball-ball"></i>
                            <i className="fas fa-cat"></i>
                            <i className="fas fa-sun"></i>
                        </div>
                        <h1>An easier way to chat</h1>
                        <p>
                            Sackforce lets you chat about anything with anyone!
                            Create public channels for all the topics you're intersted in
                            or message in private privately
                        </p>
                    </div>
                </section>
                <section id='third-section'>
                    <div id="third-section-wrapper">
                        <h1>
                            Choose the better way to message
                        </h1>
                        <nav>
                            <Link to="/signup">
                                <button type="button" id="section-signup-button">Create an account</button>
                            </Link>
                            
                            <button onClick={this.handleDemo} type="button" id="section-demo-button">Demo user</button>
                        </nav>
                    </div>
                </section>
                {/* <footer id="landing-footer">
                    <div id="resume-points">
                        <ul>
                            


                        </ul>
                    </div>
                    <div>

                    </div>



                </footer> */}
                
            </div>
        )
    }
}