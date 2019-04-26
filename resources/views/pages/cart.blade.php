@extends('layouts.app_home')
@section('content')
@include('Includes.home_header')
<!-- Page info -->
	<div class="page-top-info">
		<div class="container">
			<h4>Cart Page</h4>
			<div class="site-pagination">
				<a href="">Home</a> /
				<a href="">Cart</a> /
			</div>
		</div>
	</div>
	<!-- Page info end -->

	<!-- Category section -->
	<section class="cart-section spad">
		<div class="container">
			<div class="row">
			@include('Includes.cart_leftpane')
		  @include('Includes.cart_rightpane')
			</div>
		</div>
	</section>
	@include('Includes.home_footer')
@endsection
