controllers.controller('ProductListController', function($scope, $modal, $log, ProductService) 
{
	var self = this;
	
	//initialize grid and pagination
	$scope.paging = 
	{
		total : 0,
		page : 1,
		size : 10,
		search : ""
	};
	$scope.productList = [];
	
	//reload grid function
	this.reloadGrid = function () {
		ProductService.paging($scope.paging, function(response) 
		{
			$scope.paging.total = response.total;
			$scope.productList = response.data;
		});
	};
	this.reloadGrid();
	//update grid when type search
	var searchTO = undefined;;
	$scope.$watch('paging.search', function ()
	{
		clearTimeout(searchTO);
		searchTO = setTimeout(self.reloadGrid, 500);
	});
	
	//reload grid when page change
	$scope.pageChanged = function () {
		self.reloadGrid();
	};
	
	//add new product
	$scope.addNewProduct = function () 
	{
		self.openNewDialog();
	};
	this.openNewDialog = function () 
	{
		var instance = $modal.open(
		{
			animation : true,
			backdrop : 'static',
			templateUrl : rootUrl + 'product/add',
			controller : 'ProductAddController'
		});
		instance.result.then(function (resp) {
	      if (resp && resp.result) {
	    	  self.reloadGrid();
	      }
	    }, function () {
	      //`$log.info('Modal dismissed at: ' + new Date());
	    });
	};
	
	//edit product
	$scope.onClickEdit = function (product) {
		//console.log(product);
		var instance = $modal.open(
		{
			animation : true,
			backdrop : 'static',
			templateUrl : rootUrl + 'product/edit',
			controller : 'ProductEditController',
			resolve : { 
				product : function () {
					return product;
				}
			}
		});
		instance.result.then(function (resp) {
			console.log(resp);
			if (resp && resp.result) {
				self.reloadGrid();
			}
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	};
	 
});
controllers.controller('ProductAddController', function ($scope, $modalInstance, ProductService) {
	$scope.product = {};
	$scope.insertProduct = function (valid) {
		if(valid) {
			ProductService.save($scope.product, 
			function (resp) 
			{
				if(resp.result) {
					$modalInstance.close({result:true});
				} else {
					$modalInstance.close({result:false});
				}
			}, 
			function () 
			{ 
				$modalInstance.close({result:false});
			});
		};
	};
	$scope.cancel = function () {
		$modalInstance.dismiss();
	};
});	
controllers.controller('ProductEditController', function ($scope, $modalInstance, ProductService, product) {
	$scope.product = angular.extend({},product);
	$scope.updateProduct = function (valid) {
		if(valid) {
			ProductService.save($scope.product, 
			function (resp) 
			{
				if(resp.result) {
					$modalInstance.close({result:true});
				} else {
					$modalInstance.close({result:false});
				}
			}, 
			function () 
			{ 
				$modalInstance.close({result:false});
			});
		};
	};
	$scope.cancel = function () {
		$modalInstance.dismiss();
	};
});