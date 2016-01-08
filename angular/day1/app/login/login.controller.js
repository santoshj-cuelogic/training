angular.module('login.controller',['services'])
	.controller('loginCtrl',['$scope','loginService','homeService','$location','$rootScope', loginController])

function loginController($scope,loginService,homeService,$location,$rootScope) {

	$scope.userLogin = function(user) {
		var result = loginService.validateUser(user.email, user.password);
		if(result){
			var userData = homeService.getAllUserData(user.email);			
			loginService.setStorage(userData);
			$rootScope.$broadcast('authorized');
			//console.log(loginService.getStorage());
			//redirect to home
			$location.path("/home");
		} else {
			//print error
			$scope.errorMsg = "Wrong username or password";
		}
	};
};