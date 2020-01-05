import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link } from 'react-router-dom';


function App() {
  return ( 
        <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header className="header-grad"  title="Radixot Global" style={{color: 'white'}}>
            <Navigation>
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Radixot Global">
            <Navigation >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content className="content" >
        <div className="page-content" >
        <Main />
            </div>
            
        </Content>
    </Layout>
</div>
    </div>
  );
}


export default App;
