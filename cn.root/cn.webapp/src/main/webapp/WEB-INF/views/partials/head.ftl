<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>CN Jewelery Shop</title>

<link rel="stylesheet" href="<@spring.url "/resources/css/bootstrap.min.css"/>" />
<link rel="stylesheet" href="<@spring.url "/resources/css/sb-admin-2.css"/>" />
<link rel="stylesheet" href="<@spring.url "/resources/fonts/font-awesome/css/font-awesome.css"/>" />
<link rel="stylesheet" href="<@spring.url "/resources/css/custom.css"/>" />
<link rel="stylesheet" href="<@spring.url "/resources/js/lib/angular-toast/ngToast.css"/>" />

<script>window.rootUrl = "<@spring.url "/"/>";</script>
<#assign rootScriptUrl="/resources/js/">
<#-- Orderly include libraries, app.js, service*.js, controller*.js -->
<#list [
	'lib/jquery/jquery.min.js',
	'lib/angular/angular.min.js',
	'lib/angular/angular-animate.min.js',
	'lib/angular/angular-resource.min.js',
	'lib/angular/angular-sanitize.min.js',
	'lib/angular/angular-messages.min.js',
	'lib/angular-ui/ui-bootstrap.js',
	'lib/angular-ui/angular-ui-router.js',

	'lib/angular-ui/ui-bootstrap.js',
	'lib/angular-toast/ngToast.js',

	
	'utils.js',
	'common/directives.js'

	
] as script>
<#-- 
	'app.js',	
	'user/user.services.js',
	'product/product.services.js',
	'customer/customer.services.js',
	'order/order.services.js',
	
	'user/user.controllers.js',
	'product/product.controllers.js',
	'customer/customer.controllers.js',
	'order/order.controllers.js'
-->
<script src="<@spring.url '${rootScriptUrl + script}' />"></script>
</#list>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->