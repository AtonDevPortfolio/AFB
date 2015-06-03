myApp.controller('RegistrationController', function($scope) {
	$scope.name = 'Aton;'


	$scope.$on('$viewContentLoaded', function() {
		console.log($scope.myform);


	});

});
// ^^^RegistrationController