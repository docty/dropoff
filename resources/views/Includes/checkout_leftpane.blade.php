
				<div class="col-lg-8 order-2 order-lg-1">
					<form class="checkout-form" method="POST" action="/order">
						@csrf
						<div class="cf-title">Billing Address</div>
						<div class="row">
							<div class="col-md-7">
								<p>*Billing Information</p>
							</div>
							<div class="col-md-5">
								<div class="cf-radio-btns address-rb">
									<div class="cfr-item">
										<input type="radio" name="pm" id="one" value="regular">
										<label for="one" >Use my regular address</label>
									</div>
									<div class="cfr-item">
										<input type="radio" name="pm" id="two" value="different">
										<label for="two">Use a different address</label>
									</div>
								</div>
							</div>
						</div>
						<div class="row address-inputs">
							<div class="col-md-12">
								<input type="text"  name="address" placeholder="Address">
								<input type="text"  name="region"  placeholder="Region">
								<input type="text"  name="country" placeholder="Country">
							</div>
							<div class="col-md-6">
								<input type="text" name="number" placeholder="Phone Number">
							</div>
							<div class="col-md-6">
								<input type="text" name="email" value="{{Auth::user()->email}}" disabled placeholder="Email Address">
							</div>
						</div>
						<div class="cf-title">Delievery Info</div>
						<div class="row shipping-btns">
							<div class="col-6">
								<h4>Next day delivery</h4>
							</div>
							<div class="col-6">
								<div class="cf-radio-btns">
									<div class="cfr-item">
										<input type="radio" name="shipping" value="Free" id="ship-1">
										<label for="ship-1">Free</label>
									</div>
								</div>
							</div>
							<div class="col-6">
								<h4>Less than 12 hours</h4>
							</div>
							<div class="col-6">
								<div class="cf-radio-btns">
									<div class="cfr-item">
										<input type="radio" name="shipping" value="2.50" id="ship-2">
										<label for="ship-2">GHC2.50</label>
									</div>
								</div>
							</div>
						</div>
						<div class="cf-title">Payment</div>
						<ul class="payment-list">
							<div class="cf-radio-btns">
									<div class="cfr-item">
										<input type="radio" name="payment" value="mtnmomo" id="pay-1">

										<label for="pay-1"> <img src="./images/mtn.jpg" style="width:10%" alt=""></label>
									</div>
								</div>
								<div class="cf-radio-btns">
									<div class="cfr-item">
										<input type="radio" name="payment" value="on delivery" id="pay-2">

										<label for="pay-2"><b>Pay when you get the package</b></label>
									</div>
								</div>
							
							<li></li>
						</ul>
						<button class="site-btn submit-order-btn">Place Order</button>
					</form>
				</div>