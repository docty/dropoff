<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>{{  'DROPOFF ADMIN' }}</title>

 	<!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- Fontfaces CSS-->
    <link href="{{ asset('css/font-face.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/font-awesome.min.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/fontawesome-all.min.5.0.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/material-design-iconic-font.min.css')}}" rel="stylesheet" media="all">
    
    <!-- Bootstrap CSS-->
    <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">

    <!-- Vendor CSS-->
    <link href="{{ asset('css/animsition.min.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/bootstrap-progressbar-3.3.4.min.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/animate(2).css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/hamburgers.min.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/slick.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/select2.min.css')}}" rel="stylesheet" media="all">
    <link href="{{ asset('css/perfect-scrollbar.css')}}" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="{{ asset('css/theme.css')}}" rel="stylesheet" media="all">

    
    

</head>
<body class="animsition">
    <div class="page-wrapper">
            @yield('content')
    </div>




<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>
