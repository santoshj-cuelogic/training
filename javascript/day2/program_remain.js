//Create a student class and then create multiple student objects out of it.

function student(fname, lname) {
	this.fname = fname;
	this.lname = lname;
	//static method
	this.setLocation = function (location) {
		this.location = location;
	}
}
//first studen object
var student1 = new student("John","Cena");
console.log(student1);
//second student object
var student2 = new student("Santosh","Jagtap");
//call class static method
student2.setLocation("Pune");
console.log(student2);

//Add method(public method) in student class to set the division
student.prototype.setDivision = function (division) {
	this.division = division
}
student1.setDivision ('Expert');

console.log(student1);
/*****************************************************************/
//Make use of reserved keywords
var car = {type:"Sedan", class:"Luxury", make:"AUDI", name:"Q7"};
console.log(car);

/*****************************************************************/
//For loop
var i;
for(i=1; i<101; i++) {
	console.log(i)
}

//while loop
var i = 1;
while(i<101){
	console.log(i)
	i++;
}

//do while
var i = 1;
do{
	console.log(i);
	i++;
}while(i<101)
/*****************************************************************/


