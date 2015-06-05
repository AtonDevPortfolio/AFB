myApp.controller('MeetingsController',
	function($scope, $firebase) {

	var ref = new Firebase('https://meeteater.firebaseio.com/meetings');
	var meetings = $firebase(ref);

	$scope.meetings = meetings.$asObject();

	$scope.addMeeting=function() {
		meetings.$push ({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		}).then(function() {
			$scope.meetingname = '';
		});
	}  //Add meeting

	$scope.deleteMeeting=function(key) {
		meetings.$remove(key);
	}  // delete Meetings

});  // MeetingsController