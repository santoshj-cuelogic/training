//Program 1
//Program to copy two objects
var copyObjects = function () {
	for (var prop in arguments[0]) {
		arguments[1][prop] = arguments[0][prop];
	}
	return arguments[1];
}


var person = {firstName:"John", lastName:"Mathew", age:50, gender:"male", birthdate:{date:"21", month:"June", year:"1985"}};
var duplicatePerson = {};

var result = copyObjects(person, duplicatePerson);
console.log(result);
/****************************************************/
//Program 2
/*var mergeObjects = function () {
	var obj3 = {}
	for (var prop in arguments[0]) {		
		obj3[prop] = arguments[0][prop];
	}
	for (var prop in arguments[1]) {
		obj3[prop] = arguments[1][prop];
	}
	return obj3;
}*/
function MergeRecursive(obj1, obj2) {

  for (var p in obj1) {
    try {
      // Property in destination object set; update its value.
      if ( obj1[p].constructor==Object ) {
        obj2[p] = MergeRecursive(obj1[p], obj2[p]);
      } else {
        obj2[p] = obj1[p];
      }
    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj2[p] = obj1[p];
    }
  }
  return obj2;
}

var firstObject = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : {
    	k1 : 'data1',
    	k2 : 'data2'
    		}
};

var secondObject = {
    key1 : 'value3',
    key4 : 'value4',
    key3 : {
    	k1 : 'data3',
    	k2 : 'data4'
    		}
};

var mergeResult = MergeRecursive(firstObject, secondObject);
console.log(mergeResult);
/****************************************************/
//Program 3
Number.prototype.float = function () {
	return this.toFixed(2);
}
var myNum = 5;
console.log(myNum.float());
/****************************************************/
//Program 4
Number.prototype.int = function () {
	return Math.round(this);
}
var myNum = 5.25;
console.log(myNum.int());
/****************************************************/
//Program 5 http://stackoverflow.com/questions/16224749/how-to-get-the-id-of-all-the-child-node-ul-tags-in-a-ul
function alertChild() {
    var ulChildren = document.getElementById('newUl').children;                
    var childrenLength = ulChildren.length;    
    for(var i = 0; i < childrenLength; i++){
    	ulChildren[i].onclick = function () {alert(this.innerHTML);};        
    }
}
//var c = document.getElementById("newUl").childNodes.length;

