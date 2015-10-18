services.factory('OrderService', function ($resource) {
	return  $resource(rootUrl + 'rest/orders/:id', null, {
		 paging : {
			 method: 'POST',
			 url : rootUrl + 'rest/order/paging'
		 }
	});
});
