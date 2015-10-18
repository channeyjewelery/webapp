<#import "/spring.ftl" as spring />

<!-- Navigation -->
<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#" ui-sref="dashboard">
        	<img src="<@spring.url '/resources/images/logo.png'/>" style="width:50px;height:50px;float:left;margin-top:-15px;"/> 
			<#--<@spring.message 'app.name'/>-->
		</a>
    </div>
    
     <ul class="nav navbar-top-links navbar-left">
        <!-- /.dropdown user -->
        <li>
            <a href="<@spring.url '/'/>">
                <i class="fa fa-dashboard fa-fw"></i> <span>Dashboard </span></i>
            </a>
        </li>
        <!-- /.dropdown -->
    </ul>
    <!-- /.navbar-header -->

    <ul class="nav navbar-top-links navbar-right">
        <!-- /.dropdown user -->
        <li class="dropdown">
            <a class="dropdown-toggle" dropdown-toggle href="#">
                <i class="fa fa-user fa-fw"></i> <span><@spring.message 'welcome'/> !</span> <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user" role="menu">
                <li>
                	<a ui-sref="user_profile"><i class="fa fa-gear fa-fw"></i> <@spring.message 'menu.user.profile'/></a>
                </li>
                <li>
                	<a href="<@spring.url '/auth/logout' />"><i class="fa fa-sign-out fa-fw"></i> <@spring.message 'menu.user.logout'/></a>
                </li>
            </ul>
            <!-- /.dropdown-user -->
        </li>
        <!-- /.dropdown -->
    </ul>
</nav>
<!-- /.navbar-top-links -->
<#include 'sidebar-menu.ftl'>