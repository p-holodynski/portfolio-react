import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className = "demo-big-content" >
        <Layout>
          <Header className="header-color" title="Patryk Holodynski" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu" className="drawer-color">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div >
    );
  }
}

export default App;
