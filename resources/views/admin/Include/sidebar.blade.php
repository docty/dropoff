 <!-- MENU SIDEBAR-->
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <a href="#">
                    <img src="images/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li class="active has-sub">
                            <a class="js-arrow" href="{{route('admin.dashboard')}}">
                                <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                            
                        </li>
                        <li>
                            <a href="{{route('admin.addProduct')}}">
                                <i class="fas fa-chart-bar"></i>Add Product</a>
                        </li>
                        <li>
                            <a href="{{route('admin.latestProduct')}}">
                                <i class="fas fa-chart-bar"></i>Latest Product</a>
                        </li>
                        <li>
                            <a href="{{route('admin.order')}}">
                                <i class="fas fa-table"></i>Order</a>
                        </li>
                       <!-- <li>
                            <a href="table.html">
                                <i class="fas fa-table"></i>Products</a>
                        </li>
                        <hr>
                        <li>
                            <a href="table.html">
                                <i class="fas fa-table"></i>Articles</a>
                        </li> -->
                    </ul>
                </nav>
            </div>
        </aside>
        <!-- END MENU SIDEBAR-->
