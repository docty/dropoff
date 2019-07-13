import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Homepage from './usercomponent/Homepage'
import Category from './usercomponent/Category'
import Product from './usercomponent/Product'
import Cart from './usercomponent/Cart'
import Login from './Login'




const routing = (
       <Router>
           <Switch>
               <Route exact path='/' component={Homepage} />
               <Route exact path='/category' component={Category}/>
               <Route path='/category/:type' component={Product}/>
               <Route path='/login' component={Login}/>
               <Route path='/cart' component={Cart}/>
           </Switch>
       </Router>

);


ReactDOM.render(routing, document.getElementById('root'));
