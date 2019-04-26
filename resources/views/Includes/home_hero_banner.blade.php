<?php
$read = App\Models\LatestArrival::take(3)->get();
?>

	<!-- Hero section -->
	<section class="hero-section">
		<div class="hero-slider owl-carousel">
			
			@foreach($read as $reads)
						<div class="hs-item set-bg" data-setbg="images/product/{{$reads->filename}}">
							<div class="container">
								<div class="row">
									<div class="col-xl-6 col-lg-7 text-white">
										<span>New Arrivals</span>
										<h2>{{$reads->name }}</h2>
										<p>{{$reads->description }}</p>
										<a href="#" class="site-btn sb-line">DISCOVER</a>
										<a href="#" class="site-btn sb-white">ADD TO CART</a>
									</div>
								</div>
								<div class="offer-card text-white">
									<span>from</span>
									<h3>GHC {{$reads->price}}</h3>
									<p>SHOP NOW</p>
								</div>
							</div>
						</div>
			 @endforeach
			

		</div>
		<div class="container">
			<div class="slide-num-holder" id="snh-1"></div>
		</div>
	</section>
	<!-- Hero section end -->



	<!-- Features section -->
	<section class="features-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4 p-0 feature">
					<div class="feature-inner">
						<div class="feature-icon">
							<img src="images/icons/1.png" alt="#">
						</div>
						<h2>Fast Secure Payments</h2>
					</div>
				</div>
				<div class="col-md-4 p-0 feature">
					<div class="feature-inner">
						<div class="feature-icon">
							<img src="images/icons/2.png" alt="#">
						</div>
						<h2>Quality Products</h2>
					</div>
				</div>
				<div class="col-md-4 p-0 feature">
					<div class="feature-inner">
						<div class="feature-icon">
							<img src="images/icons/3.png" alt="#">
						</div>
						<h2>Free & fast Delivery</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Features section end -->
