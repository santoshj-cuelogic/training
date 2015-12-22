//function to add, subtract, multiply and divide 2 numbers
var Calculation = (function () {
	return{
		addNumbers: function (number1, number2) {
			return number1+number2;
		},
		subtractNumbers: function (number1, number2) {
			return number1-number2;
		},
		divideNumbers: function (number1, number2) {
			return number1/number2;
		},
		multiplyNumbers: function (number1, number2) {
			return number1*number2;
		}
	}	
});

var result = new Calculation();
console.log(result.addNumbers(4,3));
console.log(result.subtractNumbers(4,3));
console.log(result.divideNumbers(100,5));
console.log(result.multiplyNumbers(4,3));

/**********************Above function with Passing number of arguments*******************************/
var calculateDynamic = (function () {	
	return{
		addNumbers: function () {
			var i, sum = 0;
			if(validateCount(arguments)) {
				for(i=0;i < arguments.length;i++) {
					if(validateType(arguments[i]))
						sum += arguments[i];					
				}
			}
			return sum;			
		},
		subtractNumbers: function () {
			var i, sub = 0;
			if(validateCount(arguments)) {
				for(i=0;i < arguments.length;i++) {
					if(validateType(arguments[i])) {
						if(i==0)
							sub = arguments[i];
						else
							sub = sub - arguments[i];
					}
				}
			}
			return sub;
		},
		multiplyNumbers: function () {
			var i, mult = 1;
			if(validateCount(arguments)) {
				for(i=0;i < arguments.length;i++) {
					if(validateType(arguments[i]))
					mult *= arguments[i];
				}
			}
			return mult;
		}
	}
});

function validateCount(args) {
	if(args.length < 2) {
		console.log("Minimum 2 numbers required.");
		return false;
	} else 
		return true;
}

function validateType(num) {
	if(typeof num !== 'number') {
		console.log("Numbers only. \'"+num+"\' not allowed");
		return false;
	} else {
		return true;
	}
}

var result = new calculateDynamic();
console.log(result.addNumbers(4,3,5,2,4));
console.log(result.subtractNumbers(4,3,'s'));
console.log(result.multiplyNumbers(4,3,5,2,4));
/*****************************************************/