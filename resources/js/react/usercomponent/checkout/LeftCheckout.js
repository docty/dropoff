import React from 'react'


class LeftCheckout extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
    this.onValueChange = this.onValueChange.bind(this);
  }

onValueChange(e){
  this.setState({
  [e.target.name]  : e.target.value
  });
}

  render() {
    return (

      				<div className="col-lg-8 order-2 order-lg-1">
      					<form className="checkout-form" method="POST" action="/order">

      						<div className="cf-title">Billing Address</div>
      						<div className="row">
      							<div className="col-md-7">
      								<p>*Billing Information</p>
      							</div>
      							<div className="col-md-5">
      								<div className="cf-radio-btns address-rb">
      									<div className="cfr-item">
      										<input type="radio" name="pm" id="one" value="regular"/>
      										<label htmlFor="one" >Use my regular address</label>
      									</div>
      									<div className="cfr-item">
      										<input type="radio" name="pm" id="two" value="different"/>
      										<label htmlFor="two">Use a different address</label>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="row address-inputs">
      							<div className="col-md-12">
      								<input type="text"  name="address" placeholder="Address" onChange={this.onValueChange}/>
      								<input type="text"  name="region"  placeholder="Region" onChange={this.onValueChange}/>
      								<input type="text"  name="country" placeholder="Country" onChange={this.onValueChange}/>
      							</div>
      							<div className="col-md-6">
      								<input type="text" name="number" placeholder="Phone Number" onChange={this.onValueChange}/>
      							</div>
      							<div className="col-md-6">
      								<input type="text" name="email"   placeholder="Email Address" onChange={this.onValueChange}/>
      							</div>
      						</div>
      						<div className="cf-title">Delievery Info</div>
      						<div className="row shipping-btns">
      							<div className="col-6">
      								<h4>Next day delivery</h4>
      							</div>
      							<div className="col-6">
      								<div className="cf-radio-btns">
      									<div className="cfr-item">
      										<input type="radio" name="shipping" value="Free" id="ship-1"/>
      										<label htmlFor="ship-1">Free</label>
      									</div>
      								</div>
      							</div>
      							<div className="col-6">
      								<h4>Less than 12 hours</h4>
      							</div>
      							<div className="col-6">
      								<div className="cf-radio-btns">
      									<div className="cfr-item">
      										<input type="radio" name="shipping" value="2.50" id="ship-2"/>
      										<label htmlFor="ship-2">GHC2.50</label>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="cf-title">Payment</div>
      						<ul className="payment-list">
      							<div className="cf-radio-btns">
      									<div className="cfr-item">
      										<input type="radio" name="payment" value="mtnmomo" id="pay-1"/>

      										<label htmlFor="pay-1"> <img src="./images/mtn.jpg" style={{width:"10%"}} alt="Momo"/></label>
      									</div>
      								</div>
      								<div className="cf-radio-btns">
      									<div className="cfr-item">
      										<input type="radio" name="payment" value="on delivery" id="pay-2"/>

      										<label htmlFor="pay-2"><b>Pay when you get the package</b></label>
      									</div>
      								</div>

      							<li></li>
      						</ul>
      						<button className="site-btn submit-order-btn">Place Order</button>
      					</form>
      				</div>
    );
  }
}

export default LeftCheckout;
