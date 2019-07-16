import React from 'react'
import PropTypes from 'prop-types'

class RightCheckout extends React.Component {
  render() {
    let counter = 0;
    return (
      <div className="col-lg-4 order-1 order-lg-2">
        <div className="checkout-cart">
          <h3>Your Cart</h3>
          <ul className="product-list">
             {this.props.items.map(value => {
                return (<li key={value.id}>
                  <div className="pl-thumb"><img src={"images/product/"+value.filename} alt=""/></div>
                  <h6> {value.name}</h6>
                  <p>GHC  {value.price} </p>
                </li>
              )
              })}


          </ul>
          <ul className="price-list">
            {this.props.items.map(value => {
                counter = counter + value.price
            })}
            <li>Total<span>{counter}</span></li>
            <li>Shipping<span>free</span></li>
            <li className="total">Total<span>{counter} </span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RightCheckout;
