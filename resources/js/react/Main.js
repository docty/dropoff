import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Homepage from './usercomponent/Homepage'
import Category from './usercomponent/Category'
import Product from './usercomponent/Product'
import Cart from './usercomponent/Cart'
import Checkout from './usercomponent/Checkout'
import Login from './Login'
import configureStore from './redux/store'



const routing = (


    <Provider store={configureStore()}>
       <Router>
           <Switch>
               <Route exact path='/' component={Homepage} />
               <Route exact path='/category' component={Category}/>
               <Route path='/category/:type' component={Product}/>
               <Route path='/login' component={Login}/>
               <Route path='/cart' component={Cart}/>
               <Route path='/checkout' component={Checkout}/>
           </Switch>
       </Router>
  </Provider>
);


ReactDOM.render(routing, document.getElementById('root'));
