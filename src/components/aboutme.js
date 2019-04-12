import React, {Component} from 'react';

class About extends Component {
    render(){
        return(
            <div className="aboutme-container">
                <div className="aboutme-header">
                    <h1>About Me</h1>
                </div>
                <div className="aboutme-text">
                    <p>Hi, my name is Patryk.</p>
                    <p>I graduated from the Open University with a BSc degree (Computing & IT)</p>
                    <p>I am currently learning as much as I can to become a Junior Web Developer</p>
                    <p>My main focus point right now is the React framework</p>
                    <p>I have created this portfolio to showcase some of my work</p>
                    <p>If you want to know more visit my GitHub
                        <a href="https://github.com/p-holodynski" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square" aria-hidden="true" />
                        </a>
                        or LinkedIn
                        <a href="https://www.linkedin.com/in/patryk-holodynski/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                        or FreeCodeCamp
                        <a href="https://www.freecodecamp.org/p-holodynski" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-free-code-camp" aria-hidden="true" />
                        </a></p>
                </div>
            </div>
        )
    }
}

export default About;