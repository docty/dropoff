@extends('layouts.app_home')
@section('content')
@include('Includes.home_header')
<!-- Page info -->
	<div class="page-top-info">
		<div class="container">
			<h4>Contact</h4>
			<div class="site-pagination">
				<a href="">Home</a> /
				<a href="">Contact</a>
			</div>
		</div>
	</div>
	<!-- Page info end -->

	
<section class="contact-section">
		<div class="container">
		<div class="row">
				<div class="col-lg-6 contact-info">
					<h3>Get in touch</h3>
					<p>KNUST</p>
					<p>+233 7049416</p>
					<p>dropoff@gmail.com</p>
					<div class="contact-social">
						<a href="#"><i class="fa fa-pinterest"></i></a>
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-dribbble"></i></a>
						<a href="#"><i class="fa fa-behance"></i></a>
					</div>
					<form class="contact-form">
						<input type="text" placeholder="Your name">
						<input type="text" placeholder="Your e-mail">
						<input type="text" placeholder="Subject">
						<textarea placeholder="Message"></textarea>
						<button class="site-btn">SEND NOW</button>
					</form>
				</div>
			</div>
		</div>
</section>
@include('Includes.favourite_product')
@include('Includes.home_footer')
@endsection