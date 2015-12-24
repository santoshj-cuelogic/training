//Program 1
//Calculate factorial of number using recursive function call
var result = 1;
var factorial = function (number){	
	if(number > 0) {		
		result = result*number;		
		factorial(number-1);
	}
	return result;
}

var data = factorial(5);
console.log(data);

/************************************************************/
//Program 2
var student = function (fname, lname) {
	this.fname = fname;
	this.lname = lname;
	//static method
	this.setLocation = function (location) {
		this.location = location;
	}
}
//Add method(public method) in student class to set the division
student.prototype.printName = function () {
	console.log(this.fname);
	console.log(this.lname);
}
var stud1 = new student("Mark","Brad");
console.log(stud1.printName());
/************************************************************/
//Program 3
var stringFounder = function () {		
	var reg = new RegExp(arguments[1],'g');	
	var count = (arguments[0].match(reg) || []).length;
	var lastIndex = arguments[0].lastIndexOf(arguments[1]);	
	return {'count' : count, 'lastIndex' : lastIndex};
}
var result = stringFounder("abcdcefghcijkclm","c");
console.log(result);

/*************************************************************/
//program 4
var convertTime = function (timestamp) {	
  return (new Date(timestamp)).toUTCString();
}

var utcTime = convertTime(Date.now());
console.log(utcTime);
/*************************************************************/
//Program 5
var convertArray = function (queArray) {
	var resultArr = [];
	resultArr[0] = [];
	resultArr[1] = [];
	var i;
	for(i=0;i<queArray.length;i++) {
		resultArr[0][i] = queArray[i][0];
		resultArr[1][i] = queArray[i][1];
	}
	return resultArr;
}
var numArray = ['00','01','11','10','11','00'];
console.log(numArray);
var convertedArray = convertArray(numArray);
console.log(convertedArray[0]);
console.log(convertedArray[1]);
/*************************************************************/
//Program 6
//generate the array containing numbers from 1 to 100
varGenerateArr = function () {
	var numArr = [];
	for(var i=1; i<=100; i++) {
		numArr.push(i);
	}	
	return numArr;
}
var resArr = varGenerateArr();
console.log(resArr);
//Print the element from 1 to 100 without using loop
var printArr = function (numbersArray){
	var shiftNum = numbersArray.shift();
	if(shiftNum && shiftNum > 0) {		
		console.log(shiftNum);
		printArr(numbersArray);
	}
	return;
}
var finalArr = printArr(resArr);
/*************************************************************/
