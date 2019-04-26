@extends('layouts.app_home')
@section('content')
	@include('Includes.home_header')

	<!-- Page info -->
	<div class="page-top-info">
		<div class="container">
			<h4>Your cart</h4>
			<div class="site-pagination">
				<a href="">Home</a> /
				<a href="">Your cart</a>
			</div>
		</div>
	</div>
	<!-- Page info end -->

<!-- Category section -->
	<section class="checkout-section spad">
		<div class="container">
			<div class="row">
			@include('Includes.checkout_leftpane')
			@include('Includes.checkout_rightpane')
			</div>
		</div>
	</section>




	@include('Includes.home_footer')
@endsection