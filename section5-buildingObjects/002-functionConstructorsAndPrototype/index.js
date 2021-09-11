
//function constructor
function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log('this function is invoked');
  console.log('--------------------------');
}

//for efficiency's sake set methods on the prototype not on the individual objects
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
}

//the new operator creates a new object and immediately invokes the function
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Buck');
console.log(jane);

Person.prototype.getFormalFullName = function () {
  return this.lastName + ', ' + this.firstName;
}

console.log(jane.getFormalFullName());

//function constructors should always have a capital letter
//make sure you always use the new operator

//you can add custom methods to a prototype
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
}

//logs true
console.log(jane.firstName.isLengthGreaterThan(3));

//example with numbers
Number.prototype.isPositive = function () {
  return this > 0;
}

//remember that prototypes are reserved for objects
var a = new Number(3);

var b = 13;

//logs true
console.log(a.isPositive());

//invalid syntax because 12 is not an object
//console.log(12.isPositive());

console.log(Object.keys(b));

var a = 3;
var b = new Number(3);

//logs true because of type coercion with the double equals
console.log(a == b);

//logs false because they are of a different type (a is a primitive and b is an object)
console.log(a === b);

//use literals and primitives if possible because function constructors can be dangerous ex. a appears to be a number but it is really an object

// IT IS DANGEROUS TO USE CONSTRUCTOR FUNCTIONS FOR PRIMITIVES!



