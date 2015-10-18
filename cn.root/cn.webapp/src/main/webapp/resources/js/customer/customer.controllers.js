controllers.controller('CustomerListController', function($scope, $modal, $log, CustomerService) 
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
	$scope.customerList = [];
	
	//reload grid function
	this.reloadGrid = function () {
		CustomerService.paging($scope.paging, function(response) 
		{
			$scope.paging.total = response.total;
			$scope.customerList = response.data;
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
	
	//add new customer
	$scope.addNewCustomer = function () 
	{
		self.openNewDialog();
	};
	this.openNewDialog = function () 
	{
		var instance = $modal.open(
		{
			animation : true,
			templateUrl : rootUrl + 'customer/add',
			controller : 'CustomerAddController'
		});
		instance.result.then(function (resp) {
	      if (resp && resp.result) {
	    	  self.reloadGrid();
	      }
	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	};
	
	//edit customer
	$scope.onClickEdit = function (customer) {
		console.log(customer);
		var instance = $modal.open(
		{
			animation : true,
			templateUrl : rootUrl + 'customer/edit',
			controller : 'CustomerEditController',
			resolve : { 
				customer : function () {
					return customer;
				}
			}
		});
		instance.result.then(function (resp) {
			console.log(resp);
			if (resp && resp.result) {
				self.reloadGrid();
			}
	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	};
	 
});
controllers.controller('CustomerAddController', function ($scope, $modalInstance, CustomerService) {
	$scope.customer = {};
	$scope.insertCustomer = function (valid) {
		if(valid) {
			CustomerService.save($scope.customer, 
				function (resp) 
				{
					if(resp.result) {
						$modalInstance.close({result:true, customer : $scope.customer });
					} else {
						$modalInstance.close({result:false, customer : $scope.customer });
					}
				}, 
				function () 
				{ 
					$modalInstance.close({result:false, customer : $scope.customer });
				}
			);
		};
	};
	$scope.cancel = function () {
		$modalInstance.dismiss();
	};
});	
controllers.controller('CustomerEditController', function ($scope, $modalInstance, CustomerService, customer) {
	$scope.customer = angular.extend({},customer);
	console.log(customer);
	$scope.updateCustomer = function (valid) {
		if(valid) {
			CustomerService.save($scope.customer, 
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