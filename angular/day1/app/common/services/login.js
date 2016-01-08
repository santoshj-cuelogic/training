angular.module('login.service',['credentials.service'])
		.service('loginService',['credentialsService',loginService]);


function loginService(credentialsService) {
	var service = {};
	//service.get = get;
	service.validateUser = validateUser;
	service.email = '';
	service.getStorage = getStorage;
	service.setStorage = setStorage;
  service.logout = logout;
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

  function logout() {
        if(getStorage()) {            
            delete window.localStorage["userSession"];
        }
    }

  function getStorage() {
    if(typeof window.localStorage['userSession'] !== "undefined")
  	 return JSON.parse(window.localStorage['userSession']);
    else
      return false;
  }

  function setStorage(userData) {
  	return window.localStorage['userSession'] = JSON.stringify(userData);

    /*var currentUser = {
            'authenticated' : true,
            'name' : userData.fullname,
            'email' : userData.email,
            'access_token' : userData.email,
        };
    return window.localStorage['userSession'] = JSON.stringify(currentUser);*/
  }
};