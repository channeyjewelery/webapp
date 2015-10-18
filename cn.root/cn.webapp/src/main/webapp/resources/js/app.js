/**
 * <h2>services module</h2>
 * 
 * <p>
 * this provide initial module for reusable services
 * </p>
 */
var services = angular.module('app.services', []);
var controllers = angular.module('app.controllers', []);
var app = angular.module('app', [ 'ngResource', 'ngMessages', 'ngToast', 'ui.bootstrap', 'ui.router', 'app.services', 'app.controllers','app.directives' ]);

app.config(function($stateProvider, $urlRouterProvider) 
{
	$urlRouterProvider.otherwise("/dashboard");

	$stateProvider.state('dashboard', 
	{
		url : "/dashboard",
		templateUrl : rootUrl + 'dashboard/index',
	})
	.state('dashboard_index', 
	{
		url : '/dashboard/index',
		templateUrl : rootUrl + 'dashboard/index'
	})

	.state('user', 
	{
		url : '/user',
		templateUrl : rootUrl + 'user/index'
	})
	.state('user_index', {
		url : '/user/index',
		templateUrl : rootUrl + 'user/index',
		controller : 'UserController'
	})
	.state('user_profile', {
		url : '/user/profile',
		templateUrl : rootUrl + 'user/profile',
		controller : 'UserProfileController'
	})
	
	.state('product_list', 
	{
		url : '/product/list',
		templateUrl : rootUrl + 'product/list',
		controller : 'ProductListController'
	})
	
	.state('customer_list', 
	{
		url : '/customer/list',
		templateUrl : rootUrl + 'customer/list',
		controller : 'CustomerListController'
	})
	
	.state('order_form', 
	{
		url : '/order/form',
		templateUrl : rootUrl + 'order/form',
		controller : 'OrderFormController'
	})
	
	;
});

app.controller('SideMenuController', function($scope, $rootScope) {
	localStorage.getItem('fullScreenMode');
	$scope.minizeSideMenu = function() {
		$rootScope.fullScreenMode = false;
		console.log($scope.fullScreenMode);
	};
	$scope.maximizeSideMenu = function() {
		$rootScope.fullScreenMode = true;
		console.log($scope.fullScreenMode);
	};
});