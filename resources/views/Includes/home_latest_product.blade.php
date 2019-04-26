<?php
$read = App\Models\LatestArrival::all();;
?>
<!-- latest product section -->
	<section class="top-letest-product-section">
		<div class="container">
			<div class="section-title">
				<h2>LATEST PRODUCTS</h2>
			</div>
			<div class="product-slider owl-carousel">
				
				@foreach($read as $reads)
				<div class="product-item">
					<div class="pi-pic">
						<div class="tag-new">New</div>
						<img src="./images/product/{{$reads->filename }}" alt="">
						<div class="pi-links">
							<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
							<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
						</div>
					</div>
					<div class="pi-text">
						<h6>GHC {{$reads->price}}</h6>
						<p>{{ $reads->name }}</p>
					</div>
				</div> 

			 @endforeach
			</div>
		</div>
	</section>
	<!-- latest product section end -->
