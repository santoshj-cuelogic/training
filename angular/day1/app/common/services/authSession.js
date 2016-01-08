angular.module('authSession.service',['login.service'])
		.service('authSessionService',['loginService', '$rootScope', authSessionService]);

function authSessionService(loginService,Scope) {
	var service = this;
	service.request = function(config) {

		var currentUser = loginService.getStorage();

		access_token = currentUser ? currentUser.email : null;

		if(access_token) {
			config.headers.authorization = access_token;
		} else {			
            Scope.$broadcast('unauthorized');
		}
		return config;
	};

	service.response = function(response) {
        return response;
    };
    
    service.responseError = function(response) {
        return response;
    };
}