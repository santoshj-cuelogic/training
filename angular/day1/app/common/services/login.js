angular.module('login.service',['credentials.service'])
		.service('loginService',['credentialsService',loginService]);


function loginService(credentialsService) {
	var service = {};
	//service.get = get;
	service.validateUser = validateUser;
	service.email = '';
	return service;	

  function validateUser(email, password) {
  	var result;
  	angular.forEach(credentialsService.get(), function(value, key) {
  	if(value.email == email && value.password == password) {
		result = true;
		service['email'] = value.email;
	 	}
	});
	return result;
  }
};