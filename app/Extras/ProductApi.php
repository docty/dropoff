<?php

namespace App\Extras;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class ProductApi 
{
	
	function __construct()
	{
		
		
	}

	public function addQuery($value='', $type='')
	{	
		$client = new \GuzzleHttp\Client();
		$query = 'http://dropoff.test/api/product/'.$value.'?type='.$type;
		$request = $client->get($query);
		$response = $request->getBody()->getContents();
		$php_json = json_decode($response, true);
		return $php_json;
		
	}

	/**
		Get the total product of every product
	**/
	public function totalProduct($value='', $type='')
	{
		$client = new \GuzzleHttp\Client();
		$query = 'http://dropoff.test/api/product/'.$value.'?type='.$type;
		$request = $client->get($query);
		$response = $request->getBody()->getContents();
		$php_json = json_decode($response, true);
		return count($php_json['data']);
	}

	/**
		Get the single product of every item
	**/
	public function singleQuery($value='', $id='')
	{
		$client = new \GuzzleHttp\Client();
		$query = 'http://dropoff.test/api/product/'.$value.'/'.$id;
		$request = $client->get($query);
		$response = $request->getBody()->getContents();
		$php_json = json_decode($response, true);
		return $php_json;
	}

	public function storeProduct($request)
	{
		$productImage = $request->file('productImage');
		$extension = $productImage->getClientOriginalExtension();
		$filename = $productImage->getFilename().'.'.$extension;
		$client = new \GuzzleHttp\Client();
		$url = 'http://dropoff.test/api/product/'.$request->category;
		
		$response = $client->post($url, [
    		'form_params' => [
        		'productName' => $request->productName,
        		'price' => $request->price,
        		'filename' => $filename,
        		'type' => $request->type,
        		'description' => $request->description,
        		
        	],
		]);

	  	
       
        Storage::disk('public')->put($request->category.'/'.$filename,  File::get($productImage));
	return $response;

		
	}
}













