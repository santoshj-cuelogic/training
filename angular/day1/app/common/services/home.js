angular.module('home.service',[])
		.service('homeService',[homeService]);

function homeService() {
	var service = {};

	var empData = [
		{'fullname' : 'Pranay', 'email' : 'pranay@gmail.com', 'age' : '25', 'gender':'M', 'education':'MCOM'},
		{'fullname' : 'Amrutha', 'email' : 'amrutha@gmail.com', 'age' : '35', 'gender':'M', 'education':'BCOM'},
		{'fullname' : 'Shamsher', 'email' : 'shamsher@gmail.com', 'age' : '20', 'gender':'M', 'education':'BE'}
	];

	service.get = get;
	service.getUser = getUser;
	service.getAllUserData = getAllUserData;
	service.updateEmployee = updateEmployee;
	service.deleteEmployee = deleteEmployee;
	service.addEmployee = addEmployee;
	service.validate_employee = validate_employee;
	return service;

	function get() {
    	return empData;
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

  	function getAllUserData(email) {
  		var data = "";
  		var empl = service.get();
  		for(var i=0; i<empl.length; i++) {  		
	  		if(empl[i].email == email) {
				data = empl[i];
				break;
		 	}
		};

		return data;
  	}

  	function updateEmployee(emp_data, editEmail) {
  		var empData = service.get();
  		var flag = false;
  		for(var i=0; i < empData.length; i++) {
  			flag = empData[i].email == editEmail;  			  			
  			if(flag) {
  				empData[i] = emp_data;
                i = empData.length;                
  			}
  		}
  		return flag;
  	}

  	function deleteEmployee(deleteEmail) {
  		var empData = service.get();
  		var flag = false;  		
  		for(var i=0; i < empData.length; i++) {
  			flag = empData[i].email == deleteEmail;  			  			
  			if(flag) {
  				empData.splice(i, 1);
                i = empData.length;                
  			}
  		}
  		return flag;

  	}

  	/*Function to add details of new employee*/
  	function addEmployee(empDetails) {
  		console.log('ger');
  		if(!service.validate_employee(empDetails.email)){
            return false;
        }
        var empData = service.get();
        empData.push(empDetails);
        return true;
  	}

  	function validate_employee (email) {
        return !Boolean(service.getUser(email));
    }
}