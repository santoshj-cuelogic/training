angular.module('home.controller',['services'])
	.controller('homeCtrl',['$scope','homeService','loginService','$location','$routeParams', homeController])

function homeController($scope, homeService, loginService, $location, $routeParams) {
	$userName = homeService.getUser(loginService.email);
	if($userName)
		$scope.userName = $userName;
	/*else
		$location.path("/login");*/

	$scope.employees = homeService.get();
	$scope.sortOrder = "fullname";

	$scope.edit = function(object) {
		var editEmail = object.employee.email;		
		$location.path("/edit/"+editEmail);
	}

	if($location.$$path === "/add") {		
		$scope.emp_data = {
                                'email': "",
                                'fullname': "",
                                'age': "",
                                'gender' : ""
                            };

		$scope.submit = function () {
			console.log(111);
			homeService.addEmployee($scope.emp_data);
			$location.path("/home");
		}
	}

	$scope.delete = function(object) {

		if(confirm("Are you sure?")){
			var deleteEmail = object.employee.email;
			homeService.deleteEmployee(deleteEmail);
			$location.path("/home");
		}
	}

	if($routeParams.email) {
		emplEmail = $routeParams.email;		
		var empData = homeService.getAllUserData(emplEmail);		
		$scope.emp_data = empData;

		$scope.submit = function() {
			emp_detail = homeService.updateEmployee($scope.emp_data, emplEmail);
			if(emp_detail){
				$location.path("/home");
			} else {
				$scope.edit_error_message = "Email already exists";
			}

		}
	}
}
