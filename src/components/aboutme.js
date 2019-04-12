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
                    <p>I have created this portfolio to showcase some of my work using React</p>
                    <p>If you want to know more visit my GitHub or LinkedIn</p>
                </div>
            </div>
        )
    }
}

export default About;