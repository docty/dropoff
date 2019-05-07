@extends('layouts.app_admin')
@section('content')
<!-- HEADER MOBILE-->
        @include('admin.Include.header_mobile')
        <!-- END HEADER MOBILE-->

   
         <!-- MENU SIDEBAR-->
        @include('admin.Include.sidebar')
        <!-- END MENU SIDEBAR-->

         <!-- PAGE CONTAINER-->
        <div class="page-container">
            <!-- HEADER DESKTOP-->
            @include('admin.Include.header')
            <!-- HEADER DESKTOP-->

            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                        	<div class="col-lg-10">
                                <div class="card">
                                    <div class="card-header">
                                        <strong>Register A Product</strong>
                                    </div>
                                    <div class="card-body card-block">
                                        <form action="" method="post" enctype="multipart/form-data" class="form-horizontal" id="upload_form">

                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="text-input" class=" form-control-label">Product Name</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="text" id="productName"  name="productName" placeholder="Product Name" class="form-control">
                                                    
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="email-input" class=" form-control-label">Price </label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="text" id="price" name="price" placeholder="Eg 500" class="form-control">
                                                    
                                                </div>
                                            </div>
                                            
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">Category</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select name="category" id="category" class="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="womenwear">Women Wear</option>
                                                        <option value="menwear">Men Wear</option>
                                                        <option value="bags">Bags and Purse</option>
                                                        <option value="footwear">Footwear</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">Type</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select name="type" id="type" class="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Mini">Mini</option>
                                                        <option value="Midi">Midi</option>
                                                        <option value="Prom">Prom</option>
                                                        <option value="Maxi">Maxi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="file-input" class=" form-control-label">Load Product Image</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="file" id="file-input" name="productImage" class="form-control-file">
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="textarea-input" class=" form-control-label">Description</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <textarea name="description" id="description" rows="9" placeholder="Describe the product..." class="form-control"></textarea>
                                                </div>
                                            </div>
                                             <button type="submit" class="btn btn-primary btn-sm" >
                                            <i class="fa fa-dot-circle-o" ></i> Save Product
                                        </button>
                                        <button type="reset" class="btn btn-danger btn-sm">
                                            <i class="fa fa-ban"></i> Reset
                                        </button>
                                        </form>
                                    </div>
                                    <div class="card-footer">
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection