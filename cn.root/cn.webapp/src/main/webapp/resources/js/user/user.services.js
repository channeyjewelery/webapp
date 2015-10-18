services.factory('UserService', function ($resource)
{
	return  $resource(rootUrl + 'rest/users/:id', null, {
		me : {
			method : 'GET',
			params : {},
			url : rootUrl + 'rest/users/me'
		},
		update : {
			method : 'PUT'
		}
	});
});
