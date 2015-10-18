<div class="navbar-default sidebar" role="navigation" style="" ng-controller="SideMenuController">
    <div class="sidebar-nav">
        <ul class="nav" id="side-menu">
            <li>
                <a ui-sref="dashboard">
                	<i class="fa fa-dashboard fa-fw"></i>
                 	Dashboard</a>
            </li>
            <li>
                <a ui-sref="product_list"><i class="fa fa-bar-chart-o fa-fw"></i> Product</a>
                <!--<ul class="nav nav-second-level">
                    <li>
                        <a ui-sref="product_list">Product</a>
                    </li>
                </ul>-->
                <!-- /.nav-second-level -->
            </li>
            <li>
                <a ui-sref="customer_list"><i class="fa fa-users fa-fw"></i> Customer</a>
            </li>
            <li>
                <a href="#">
                	<i class="fa fa-edit fa-fw"></i> 
                	Order
                	<span class="fa open fa-angle-down pull-right"></span>
                </a>
                 <ul class="nav nav-second-level" aria-expanded="true">
                 	<li>
						<a ui-sref="order_form"> <i class="fa fa-tag"></i> Make order</a>
        	        </li>
        	        <li>
						<a href="#"> <i class="fa fa-tag"></i> Order List</a>
        	        </li>
				</ul>
            </li>
            <li class="nav-parent">
                <a ui-sref="order_form">
                	<i class="fa fa-table fa-fw"></i> 
                	Account  
                	<span class="fa open fa-angle-down pull-right"></span>
                </a>
                <ul class="nav nav-second-level" aria-expanded="true">
                 	<li>
						<a href="#">Write Expense</a>
        	        </li>
        	        <li>
						<a href="#">Close Account</a>
        	        </li>
				</ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-bar-chart fa-fw"></i> Reports</a>
            </li>
        </ul>
    </div>
    <!-- /.sidebar-collapse -->
</div>