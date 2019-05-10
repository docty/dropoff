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
                        <form action="{{route('admin.saveLatest')}}" method="post">
                            @csrf
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive table-responsive-data2">
                                        <table class="table table-data2">
                                            <thead>
                                                <tr>
                                                    
                                                    <th>product name</th>
                                                    
                                                    <th>category</th>
                                                    <th>price</th>
                                                    <th>Add to display</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            `@foreach ($cart as $carto)
                                                @foreach ($carto as $carts)
                                                <tr class="tr-shadow">
                                                    
                                                    <td>{{$carts->name}}</td>
                                                    <input hidden type="text" name="name" value="{{$carts->name}}">
                                                    <td >{{$carts->type}}</td>
                                                    <td class="desc">{{$carts->price}} GHC</td>
                                                    
                                                    <td>
                                                        <label class="au-checkbox">
                                                            <input type="checkbox">
                                                            <span class="au-checkmark"></span>
                                                        </label>
                                                    </td>
                                                    
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
                                            @endforeach
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    
                            <input class="btn-lg btn-success " type="submit" value="Set To Display">
                        </form>
                    </div>
                </div>
            </div>

        </div>

@endsection