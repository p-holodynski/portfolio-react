import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Project from './projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Project} />
        <Route path="/aboutme" component={About} />
    </Switch>
)

export default Main;