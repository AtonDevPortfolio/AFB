myApp.controller('RegistrationController',
	function($scope, $firebaseSimpleLogin, $location) {

	$scope.login = function() {
		simpleLogin.$login('password', {
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function(user){
			$location.path('/meetings');
		}, function(error) {
			$scope.message = error.toString();
		});
		
	} // Login

	$scope.register = function() {
		$location.path('/meetings')
	} // Login

}); // RegistrationController 