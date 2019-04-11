import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn.r10.net/image.php?u=102744&dateline=1525381113"
                            alt="coderAvatar"
                            className="avatar-img"
                        />
                    <div className="banner-text">
                        <h1>Junior Web Developer</h1>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;