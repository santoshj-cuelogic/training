angular.module('home.service',[])
		.service('homeService',[homeService]);

function homeService() {
	var service = {};
	service.get = get;
	service.getUser = getUser;
	return service;

	function get() {
    return [{'fullname' : 'Pranay', 'email' : 'pranay@gmail.com', 'age' : '25', 'gender':'M', 'education':'MCOM'},
    		{'fullname' : 'Amrutha', 'email' : 'amrutha@gmail.com', 'age' : '35', 'gender':'M', 'education':'BCOM'},
    		{'fullname' : 'Shamsher', 'email' : 'shamsher@gmail.com', 'age' : '20', 'gender':'M', 'education':'BE'}];
  	}

  	function getUser(email) {
  		var name = '';
  		angular.forEach(service.get(), function(value, key) {
	  	if(value.email == email) {
			name = value.fullname;
		 	}
		});
		return name;
  	}
}