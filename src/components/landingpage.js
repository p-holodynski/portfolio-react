import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import myAvatar from './img/myAvatar.png'

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={myAvatar}
                            alt="coderAvatar"
                            className="avatar-img"
                        />
                    <div className="banner-text">
                        <h1>Junior Web Developer</h1>
                        <hr/>
                        <p>HTML | CSS | Bootstrap | JavaScript | React</p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/patryk-holodynski/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>
                            
                            {/* GitHub */}
                            <a href="https://github.com/p-holodynski" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-square" aria-hidden="true" />
                            </a>

                            {/* FreeCodeCamp */}
                            <a href="https://www.freecodecamp.org/p-holodynski" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-free-code-camp" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;