import React from 'react'


class RightCart extends React.Component {
  render() {
    return (

          <div className="col-lg-4 card-right">
            <form className="promo-code-form">
              <input type="text" placeholder="Enter promo code"/>
              <button>Submit</button>
            </form>
            <a href="/checkout" className="site-btn">Proceed to checkout</a>
            <a href="" className="site-btn sb-dark">Continue shopping</a>
          </div>


    );
  }
}

export default RightCart;
