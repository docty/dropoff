import React from 'react'


class LeftCheckout extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
    this.onValueChange = this.onValueChange.bind(this);
    this.onDelivery = this.onDelivery.bind(this);
    this.submitData = this.submitData.bind(this);
  }

onValueChange(e){
  this.setState({
  [e.target.name]  : e.target.value
  });
}
submitData(e){

  var shippingMode = $("input[name='shipping']:checked").val();
  var paymentMode = $("input[name='payment']:checked").val();
  e.preventDefault();
  
  axios.post('/order',{
    email: this.state['email'],
    address: this.state['address'],
    region : this.state['region'],
    country : this.state['country'],
    number : this.state['number'],
    shipping : shippingMode,
    payment : paymentMode
  })
    .then(function (response){
     console.log(response.data);
    })
    .catch( function (error){
      // Describe error!
    });
}

onDelivery(e){
  this.props.onDelivery(e);

}
  render() {
    return (

      				<div className="col-lg-7 order-2 order-lg-1">
                <button className="btn btn-primary" style={{margin : '5px'}} onClick={this.props.proceed}>Back To Cart</button>
      					<form onSubmit={this.submitData} className="checkout-form" method="POST" >

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
      										<input type="radio" name="pm" id="two" value="different" selected/>
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
      										<input type="radio" name="shipping" value="Free" id="ship-1" onClick={this.onDelivery}/>
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
      										<input type="radio" name="shipping" value="2.50" id="ship-2" onClick={this.onDelivery}/>
      										<label htmlFor="ship-2">GHC2.50</label>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="cf-title">Payment</div>
      						<ul className="payment-list">
      							<div className="cf-radio-btns">
      									<div className="cfr-item">
      										<input type="radio" name="payment" value="MTN mobile money" id="pay-1"/>

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
