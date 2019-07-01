import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Homepage from './usercomponent/Homepage'
import Category from './usercomponent/Category'






const routing = (
       <Router>
           <Switch>
               <Route exact path='/' component={Homepage} />
               <Route path='/category' component={Category}/>
           </Switch>
       </Router>

);


ReactDOM.render(routing, document.getElementById('root'));
