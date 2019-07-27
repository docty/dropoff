import React from 'react'





const RightCart = (props) => {

  return (

        <div className="col-lg-4 card-right">
          <form className="promo-code-form">
            <input type="text" placeholder="Enter promo code"/>
            <button>Submit</button>
          </form>
          <a href="#" className="site-btn" onClick={props.proceed}>Proceed to checkout</a>
          <a href="" className="site-btn sb-dark">Continue shopping</a>
        </div>


  );
}

export default RightCart
