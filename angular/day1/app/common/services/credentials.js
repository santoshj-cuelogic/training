angular.module('credentials.service',[])
	.service('credentialsService',[credentialsService]);


function credentialsService() {
	var service = {};
	service.get = get;
	return service;

	function get() {
    return [{'name' : 'Pranay', 'email' : 'pranay@gmail.com', 'password' : '123456'},
    		{'name' : 'Amrutha', 'email' : 'amrutha@gmail.com', 'password' : '123456'},
    		{'name' : 'Shamsher', 'email' : 'shamsher@gmail.com', 'password' : '123456'}];
  	}
}