myApp.controller('MeetingsController',
	function($scope, $firebase) {

	var ref = new Firebase('https://meeteater.firebaseio.com/meetings');
	var meetings = $firebase(ref);

	$scope.meetings = meetings.$asObject();


});  // MeetingsController