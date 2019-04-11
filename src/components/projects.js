import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardTitle, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
            <div className="project-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>
                        Quote Generator
                    </CardTitle>
                    <CardText>
                        This is the FreeCodeCamp Quote Generator project using React
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>
                        Quote Generator
                    </CardTitle>
                    <CardText>
                        This is the FreeCodeCamp Quote Generator project using React
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Project;