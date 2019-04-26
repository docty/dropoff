<?php
$read = App\Models\Cart::where('email', Auth::user()->email)->get();
?>				
				<div class="col-lg-4 order-1 order-lg-2">
					<div class="checkout-cart">
						<h3>Your Cart</h3>
						<ul class="product-list">
							@foreach($read as $reads)
							<li>
								<div class="pl-thumb"><img src="images/product/{{$reads->filename}}" alt=""></div>
								<h6>{{$reads->name}}</h6>
								<p>GHC {{$reads->price}}</p>
							</li>
							@endforeach
							
						</ul>
						<ul class="price-list">
							<li>Total<span>{{$read->sum('price')}}</span></li>
							<li>Shipping<span>free</span></li>
							<li class="total">Total<span>{{$read->sum('price')}}</span></li>
						</ul>
					</div>
				</div> 