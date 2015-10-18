controllers.controller('OrderFormController', function($rootScope, $scope, $modal, $log, ngToast, Utils, ProductService, CustomerService, OrderService) 
{
	//$rootScope.fullScreenMode = true;
	
	$scope.isGeneralCustomer = true;
	$scope.availableProducts = [];
	resetOrderForm();
	reloadCustomer();
	reloadProduct();
	
	$scope.onAddProductToOrderList = function($valid) {
		if($valid) {
			var temp = $.extend(true, {}, $scope.temp);
			temp.total = (temp.amount * temp.salePrice).toFixed(2);
			addProductToOrderList(temp);
			$scope.temp = {};
			document.getElementById("cbo-temp-product").focus();
		}
	};
	
	$scope.onProductChange = function() {
		console.log($scope.temp.product);
		$scope.temp.salePrice = $scope.temp.product.price;
		document.getElementById("txt-temp-amount").focus();
	};
	
	$scope.onEditOrder = function(order, index) {
		$scope.temp = order;
		$scope.orderList.splice(index, 1);
	};
	
	$scope.removeOrder = function(order, index) {
		$scope.orderList.splice(index,1);		
		updateGrandTotal();
	};
	
	$scope.onSubmitOrder = function () {
		if(!$scope.orderList.length) {
			alert("Please add order item before saving.");
		}
		else {
			var customer;
			if($scope.isGeneralCustomer) {
				customer = {id:0};
			}
			else {
				customer = $scope.customer;
			}
			OrderService.save({
				customer : customer,
				orderDetails : $scope.orderList
			}, function (resp) {
				if(resp.result) {
					resetOrderForm();
					ngToast.success('Order was saved successfully.');
				}
				else {
					
				}
			});
		}
	};
	
	$scope.onAddNewCustomer = function () 
	{
		var instance = $modal.open(
		{
			animation : true,
			templateUrl : rootUrl + 'customer/add',
			controller : 'CustomerAddController'
		});
		instance.result.then(function (resp) {
	      if (resp && resp.result) {
	    	  reloadCustomer(resp.customer.name);
	      }
	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	};
	
	function addProductToOrderList(order) {
		var orderList = $scope.orderList,
			length = orderList.length,
			isNew = true;
		for(var i=0; i<length; i++) {
			var oldOrder = orderList[i];
			if(order.product.id == oldOrder.product.id) {
				isNew = false;
				oldOrder.amount += order.amount;
				oldOrder.salePrice = order.salePrice;
				oldOrder.total = oldOrder.salePrice * oldOrder.amount;
			}
		}
		if(isNew) {
			$scope.orderList.push(order);
		}
		$scope.frmProduct.$setPristine();
		updateGrandTotal();
	}
	
	function resetOrderForm() {
		$scope.customer = {};
		$scope.orderList = [];
		$scope.temp = {};
		$scope.grandTotal = 0;
		$scope.paidAmount = 0;
	}
	
	function updateGrandTotal() {
		var orderList = $scope.orderList,
			length = orderList.length;

		var sum=0;
		for(var i=0; i<length; i++) {
			var total = orderList[i].total;
			if(!total) {
				var order = orderList[i];
				total = order.salePrice * order.amount; 
			}
			sum += Number(orderList[i].total);
		}
		$scope.grandTotal = Number(sum).toFixed(2);
	};
	
	function reloadCustomer(name) {
		CustomerService.query(function(data) {
			$scope.customerList = data;
			name && ($scope.customer.name=name);
		});
	}
	function reloadProduct() {
		ProductService.query(function(data) {
			$scope.availableProducts = data;
		});
	}
});