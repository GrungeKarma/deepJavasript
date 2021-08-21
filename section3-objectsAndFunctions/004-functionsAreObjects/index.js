//IN JAVASCRIPT functions are objects often called Fist Class Functions
// a function has a name property and a code property

function greet() {
  console.log('hi')
}

//you can assign properties to functions
//assigning a property to the greet function
greet.language = 'english';

//logs english
console.log(greet.language);

