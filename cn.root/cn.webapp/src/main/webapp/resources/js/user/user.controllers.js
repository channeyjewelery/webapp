controllers.controller('UserProfileController', function($scope, UserService) 
{
	$scope.profile = UserService.me();
	$scope.submit = function(valid) 
	{
		if(valid)
		{
			UserService.update({id:$scope.profile.id},$scope.profile);
		}
	};
});