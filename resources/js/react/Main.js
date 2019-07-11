import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Homepage from './usercomponent/Homepage'
import Category from './usercomponent/Category'
import Product from './usercomponent/Product'





const routing = (
       <Router>
           <Switch>
               <Route exact path='/' component={Homepage} />
               <Route exact path='/category' component={Category}/>
               <Route path='/category/:type' component={Product}/>
           </Switch>
       </Router>

);


ReactDOM.render(routing, document.getElementById('root'));
