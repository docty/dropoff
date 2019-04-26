<?php

namespace App\Extras;


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
}













