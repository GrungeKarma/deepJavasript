var person = {
  firstName: 'Anthony',
  lastName: 'Lopez',
  greetFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
}


var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.greetFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('------------------');
}

//set a new variable that binds this to the person object
var logPersonName = logName.bind(person);



var logName1 = function (lang1, lang2) {
  console.log('Logged: ' + this.greetFullName());

}.bind(person);
//you can also bind at the end of a function


//bind attaches the param passed to it to the this variable
logName1();
//bind attaches the param passed to it to the this variable
logPersonName('en');

//bind creates a copy of the function where you can tell it what the this variable is bound to

//calls a function but you can ste the this and the params
//while bind creates a copy call executes it
logName.call(person, 'en', 'jp');

//same as call but wants an arr
logName.apply(person, ['jp', 'en'])





// function borrowing

var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

console.log(person.greetFullName.apply(person2));

//you can grab methods from other objects and use them as long as you have similar property names






// function curring

//binding creates a copy and when you add params it assigns permanent values to the params from left to right

function multiply(a, b) {
  return a * b;
}


/*same as
  function multiply( b) {
    var a = 2;
    return  * b;
  }
*/
var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4));
