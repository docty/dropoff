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
                            <div class="col-md-12">
                                <div class="table-responsive table-responsive-data2">
                                    <table class="table table-data2">
                                        <thead>
                                            <tr>
                                                
                                                <th>product name</th>
                                                <th>email</th>
                                                <th>quantity</th>
                                                <th>price</th>
                                                <th>status</th>
                                                <th>date</th>
                                                <!--<th></th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($cart as $carts)
                                            <tr class="tr-shadow">
                                                
                                                <td>{{$carts->name}}</td>
                                                <td>
                                                    <span class="block-email">{{$carts->email}}</span>
                                                </td>
                                                <td class="desc">{{$carts->quantity}}</td>
                                                <td>{{$carts->price}} GHC</td>
                                                <td>
                                                    <span class="status--process">{{$carts->status}}</span>
                                                </td>
                                                <td>{{$carts->created_at}}</td>
                                               <!-- <td>
                                                    <div class="table-data-feature">
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Send">
                                                            <i class="zmdi zmdi-mail-send"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit">
                                                            <i class="zmdi zmdi-edit"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                        
                                                    </div>
                                                </td> -->
                                            </tr>
                                            <tr class="spacer"></tr>
                                            @endforeach
                                            
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
@endsection