import React from 'react'
import {connect} from 'react-redux';
import RightCart from './RightCart'
import LeftCart from './LeftCart'
import LeftCheckout from './LeftCheckout'
import RightCheckout from './RightCheckout'

import {setCartValue, setCartCheckoutDisplay, setValueChange} from './../../redux/action/index'

class CartCheckout extends React.Component {

constructor(props){
  super(props);


}

onValueChange(e){
  console.log(e.target.value);
  // this.setState({
  // [e.target.name]  : e.target.value
  // });
}

  componentWillMount() {

    axios.get('/getauth')
      .then(response => {
        if (response.data == "authenticated") {
            this.authenticated();
        }else{
            this.unauthenticated();
        };
      })
      .catch(function (error){
        console.log(error);
      });

  }



  render() {
    if(this.props.cartCheckout){
      return (
        <div className="row">
          <LeftCart items={this.props.cartValue} onValueChange = {this.props.onValueChange} />
          <RightCart proceed={this.props.proceed}/>
          </div>
       );
     }else{
      return (
        <div className="row">
          <LeftCheckout  proceed={this.props.proceed}/>
          <RightCheckout items = {this.props.cartValue} />
         </div>
       )
     }

  }

authenticated (){
  console.log('authenticated');
  axios.get('/getcartItems')
    .then(response => {
      this.props.cart(response.data);
    })
    .catch( error => {
      console.log(error);
    });

}

unauthenticated (){
  console.log('unauthenticated');
  let obj =  window.localStorage;

  var array = new Array();

  for (const key of Object.keys(obj)){
      array.push(JSON.parse(obj[key]));
    }

  this.props.cart(array)
  }

}

export const mapDispatchToProps = (dispatch) => {
  return {
      cart: (element) => {
          dispatch(setCartValue(element));
      },
      proceed : (e) => {
        e.preventDefault();
        dispatch(setCartCheckoutDisplay())
      },
      onValueChange : (e) => {
          dispatch(setValueChange(e))
      }
    }
};

export const mapStateToProps = (state) => {
  return {
        cartValue : state.cart.items,
        cartCheckout : state.cart.isCartShowing,
        valueChange : state.cart.valueChange
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);
