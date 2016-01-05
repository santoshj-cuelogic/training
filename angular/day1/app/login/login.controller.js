angular.module('login.controller',['services'])
	.controller('loginCtrl',['$scope','loginService','$location', loginController])

function loginController($scope,loginService,$location) {

	$scope.userLogin = function(user) {
		$result = loginService.validateUser(user.email, user.password);
		if($result){
			//redirect to home
			$location.path("/home");
		} else {
			//print error
			$scope.errorMsg = "Wrong username or password";
		}
	};
};