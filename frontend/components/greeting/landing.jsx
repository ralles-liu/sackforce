import React from "react"
import {Link} from "react-router-dom"





// THIS IS WHERE THE WELCOME DEFAULT PAGE IS
export default class Landing extends React.Component {
    constructor(props) {
        super(props)
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
                                    <Link to="/">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Enterprise
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Pricing
                                    </Link>
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
                        <Link to="/">
                            <button type="button" id="section-demo-button">Demo user</button>
                        </Link>
                        
                    </div>
                    <img id="chatting-image"src={window.chattingURL}alt="chatting"/>
                </section>
                {/* <section id="second-section">
                    section2
                    
                </section>
                <section>
                    section3
                </section>
                <section>
                    section4
                </section> */}
                
            </div>
        )
    }
}