angular.module('home.controller',['services'])
	.controller('homeCtrl',['$scope','homeService','loginService','$location', homeController])

function homeController($scope, homeService,loginService, $location) {
	$userName = homeService.getUser(loginService.email);
	if($userName)
		$scope.userName = $userName;
	else
		$location.path("/login");
}
