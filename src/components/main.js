import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Home from './home';



 
const Main = ()=>(
  <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route  path='/portfolio' component={Portfolio}  />
      <Route  path='/contact' component={Contact} />
      </Switch>
  </div>
)

export default Main;