myApp.factory('Authentication', function($firebase,
	$firebaseSimpleLogin, FIREBASE_URL, $location) {

	var ref = new Firebase(FIREBASE_URL);
	var simpleLogin = $firebaseSimpleLogin(ref);

});