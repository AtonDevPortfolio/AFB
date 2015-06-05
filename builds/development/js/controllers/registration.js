myApp.controller('RegistrationController',
	function($scope, $location) {
	


	$scope.login = function() {
		$location.path('/login')
	} // Login

	$scope.register = function() {
		$location.path('/register')
	} // Login

}); // RegistrationController 