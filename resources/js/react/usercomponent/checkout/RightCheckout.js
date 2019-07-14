import React from 'react'
import PropTypes from 'prop-types'

class RightCheckout extends React.Component {
  render() {
    return (
      <div className="col-lg-4 order-1 order-lg-2">
        <div className="checkout-cart">
          <h3>Your Cart</h3>
          <ul className="product-list">

            <li>
              <div className="pl-thumb"><img src="images/product/1.jpg" alt=""/></div>
              <h6> name</h6>
              <p>GHC  price </p>
            </li>


          </ul>
          <ul className="price-list">
            <li>Total<span>price</span></li>
            <li>Shipping<span>free</span></li>
            <li className="total">Total<span>price </span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RightCheckout;
