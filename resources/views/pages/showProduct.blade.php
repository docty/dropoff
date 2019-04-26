<?php
	use App\Extras\ProductApi;
	$productapi = new ProductApi();
		if(isset($_GET['q'])){
			
			$sql = $_GET['q'];
		}
			
    		$results = $productapi->singleQuery($sql, $id);
?>

@extends('layouts.app_home')
@section('content')
@include('Includes.home_header')

<!-- Page info -->
	<div class="page-top-info">
		<div class="container">
			<h4>Category PAge</h4>
			<div class="site-pagination">
				<a href="">Home</a> /
				<a href="">Shop</a>
			</div>
		</div>
	</div>
	<!-- Page info end -->

	<section class="product-section">
		<div class="container">
			<div class="back-link">
				<a href="/category"> &lt;&lt; Back to Category</a>
			</div>
			<div class="row">
				@include('Includes.showproduct_leftpane')
				@include('Includes.showproduct_rightpane')
			</div>
		</div>
	</section>

@include('Includes.home_footer')
@endsection
