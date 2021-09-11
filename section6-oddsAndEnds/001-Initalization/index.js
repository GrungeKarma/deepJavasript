
//function constructor
function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log('this function is invoked');
}

//the new operator creates a new object and immediately invokes the function
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Buck');
console.log(jane);
