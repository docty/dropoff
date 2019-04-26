<div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
	<div class="row">
	    @foreach ($results['data'] as $product)
	        <div class="col-lg-4 col-md-6">
				<div class="product-item"> 
					 <div class="pi-pic">
					 	<a href="/category/<?php echo $product['id'].'?q='.$query ?>"><img src="./images/product/{{$product['filename']}}" alt=""></a>
							<div class="pi-links">
								  <a   class="add-card"><i class="flaticon-bag"></i>
  								  	 <button id="adam" onclick="addToCart('{{$product['name']}}', {{$product['price']}}, '{{$product['filename']}}')"  style="width: 100%; "><span>ADD TO CART</span></button>
  								  </a> 
  								  <!-- <a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a> -->
							
							</div>
						</div>
				   
					<div class="pi-text">
						<h6>GHC {{$product['price']}}</h6>
						<p>{{$product['name']}} </p>
					</div>
				</div>
			</div>
	   @endforeach
	</div>
	

</div>
 







