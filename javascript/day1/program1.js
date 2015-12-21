//Create integer variable
var x = 100;
console.log(x);

//Create string variable
var s = "This is string variable";
console.log(s);

//create boolean variable
var y = true;
console.log(Boolean(y)); //returns true
//toggle boolean variable
var y = !y;
console.log(Boolean(y)); //returns false

//create object
var employee = {fName:"Santosh", lName:"Jagtap", designation:"Developer", empCode:"080"};
console.log(employee.fName);
console.log(employee['lName']);

//Create array variable
var employeeArray = ["Santosh","Jagtap"];
console.log(employeeArray[0]);

//Add various elements in array
employeeArray.push("deleteValue");//string
employeeArray.push("Developer");
employeeArray.push(55);//integer
employeeArray.push(Date.now);//date function
console.log(employeeArray);

//Remove element from array
employeeArray.splice(2,1);
console.log(employeeArray);
employeeArray.pop();
console.log(employeeArray);

//Concatenate string
var concatenate = "This "+"is "+"concatenated "+"string";
console.log(concatenate);

/***********************************/
//Ways to create object variable
//Using Literal
var person = {firstName:"John", lastName:"Mathew", age:50, gender:"male"};
console.log(person);

//Using keyword new
var person = new Object();
person.firstName = "John";
person.lastName = "Mathew";
person.age = 50;
person.gender = "male";
console.log(person);

//Using constructor
function user(first, last, age, gender) {
	this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
}

var myself = new user('Santosh','Jagtap',30,'male');
console.log(myself);
/***********************************/
/***********************************/
//Ways to create Array variables
//Using literal
var students = ['John','Michel','Steve'];
console.log(students);
//Using new keyword
var students = new Array("John","Michel","Steve");
console.log(students);
/***********************************/