
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
