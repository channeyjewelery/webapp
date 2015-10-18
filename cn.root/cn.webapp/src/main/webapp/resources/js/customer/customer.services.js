services.factory('CustomerService', function ($resource) {
	return  $resource(rootUrl + 'rest/customers/:id', null, {
		 paging : {
			 method: 'POST',
			 url : rootUrl + 'rest/customers/paging'
		 }
	});
});
