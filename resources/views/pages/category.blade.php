<?php

	use App\Extras\ProductApi;
	
	if(isset($_GET['q'])){
		$type = $_GET['type'];
		$query = $_GET['q'];
	}else { 
		$type = '';
		$query ='footwear';
	}
		$productapi = new ProductApi();
    	$results = $productapi->addQuery($query, $type);		
 ?>
 
@extends('layouts.app_home')
@section('content')
@include('Includes.home_header')
<!-- Page info -->
	<div class="page-top-info">
		<div class="container">
			<h3>Category Page</h3>
			<div class="site-pagination">
				<p>Keep Shopping With DropOff and get more bonuses</p>
			</div>
		</div>
	</div>


	<!-- Page info end -->

	<!-- Category section -->
	<section class="category-section spad">
		<div class="container">
			<div class="row">
			@include('Includes.category_leftpane')
			@include('Includes.category_rightpane')
			</div>
		</div>
	</section>
@include('Includes.home_footer')
@endsection

@push('extScript')

<script src="{{ asset('js/category_refine.js') }}" defer></script>
@endpush