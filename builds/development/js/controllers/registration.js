myApp.controller('RegistrationController',
	function($scope, $location) {
	


	$scope.login = function() {
		$location.path('/meetings')
	} // Login

	$scope.register = function() {
		$location.path('/meetings')
	} // Login

}); // RegistrationController 