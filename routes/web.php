<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts/app_home');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/category', 'PageController@category')->name('category');
Route::get('/category/{showitem}', 'PageController@showProduct')->name('showproduct');
Route::get('/cart', 'PageController@cart')->middleware('auth');
Route::get('/checkout', 'PageController@checkout');


Route::post('/addcart', 'CartController@addToCart')->name('addcart');
Route::post('/order', 'CartController@placeOrder')->name('order');
Route::get('/billingInfo', 'CartController@getBillingInfo')->name('billingInfo');



Route::get('/contact', function () {
    return view('contact');
});

Route::get('/about', function () {
    return view('about');
});

//Admin Server

Route::resource('/admin', 'AdminController')->except([
    'show', 'update', 'destroy'
]);
Route::get('/admin/dashboard', 'AdminDashboardController@home')->name('admin.dashboard');
Route::get('/admin/addproduct', 'AdminDashboardController@addProduct')->name('admin.addProduct');
Route::get('/admin/order', 'AdminDashboardController@order')->name('admin.order');
Route::get('/admin/latestproduct', 'AdminDashboardController@latestProduct')->name('admin.latestProduct');
Route::post('/admin/saveproduct', 'AdminDashboardController@saveProduct')->name('admin.saveProduct');
Route::post('/admin/savelatest', 'AdminDashboardController@saveLatest')->name('admin.saveLatest');
