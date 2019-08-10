import React from 'react'
import {connect} from 'react-redux';
import RightCart from './RightCart'
import LeftCart from './LeftCart'
import LeftCheckout from './LeftCheckout'
import RightCheckout from './RightCheckout'

import {setCartValue, setCartCheckoutDisplay, setValueChange, setDeliveryMode} from './../../redux/action/index'

class CartCheckout extends React.Component {

constructor(props){
  super(props);

  this.state = {}
  this.onValueChange = this.onValueChange.bind(this);
}


onValueChange(e){
  if(e.target.value < 1){
    e.target.value = 1;
  }
  this.setState({
    [e.target.name]: e.target.value
  });


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

  componentDidUpdate(nextProps, nextState) {
    let counter = 0;
       this.props.cartValue.map((value, index) => {
      counter = counter + (this.state[index] == null ? parseFloat(value.price) : parseFloat(this.state[index])*parseFloat(value.price));
      })

    $('#totalValue').text('GHC ' + counter);

  }

  render() {
    if(this.props.cartCheckout){
      return (
        <div className="row">
          <LeftCart items={this.props.cartValue} onValueChange = {this.onValueChange} newChanges={this.state}  />
          <RightCart proceed={this.props.proceed}/>
        </div>
       );
     }else{
      return (
        <div className="row">
          <LeftCheckout onDelivery={this.props.onDelivery} proceed={this.props.proceed}/>
          <RightCheckout deliveryMode ={this.props.delivery} items = {this.props.cartValue} />
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

  this.props.cart(array);
  console.log(array);
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
      },
      onDelivery : (e) => {

         dispatch(setDeliveryMode(e))
      }
    }
};

export const mapStateToProps = (state) => {
  return {
        cartValue : state.cart.items,
        cartCheckout : state.cart.isCartShowing,
        valueChange : state.cart.valueChange,
        delivery : state.cart.delivery
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);
