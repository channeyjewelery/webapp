services.factory('ProductService', function ($resource) {
	return  $resource(rootUrl + 'rest/products/:id', null, {
		 paging : {
			 method: 'POST',
			 url : rootUrl + 'rest/products/paging'
		 },
	});
});
