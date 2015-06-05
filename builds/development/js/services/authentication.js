myApp.factory('Authentication', function($firebase,
	$firebaseSimpleLogin, $location) {

	var ref = new Firebase('https://meeteater.firebaseio.com/');
	var simpleLogin = $firebaseSimpleLogin(ref);

});