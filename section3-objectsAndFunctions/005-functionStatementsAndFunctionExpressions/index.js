//var a;

//if you run these in the console they all return a value so they are expressions
// a = 3;
// 1 + 2;
// a = {greeting: 'hi'};

// the if statement is a statement because it does not return a value
// if statements use expressions in the parens
//if (a === 3) {
//
//}

//statements just do work and expressions result in a value
//will work but only here for demonstration of global memory is not good practice to place here
greet();

//logs a type error because anonymousGreet is not in the global memory yet
//anonymousGreet();

//example of a function statement
function greet() {
  console.log('hi');
};

//example of a function expression because of = operator
//results in an object being created
var anonymousGreet = function () {
  console.log('hi');
}

//logs hi correctly
anonymousGreet();

function log(a) {
  //console.log(a);

  //will use the function
  a();
}

//all log expected values
// log(3);
// log('hello');
// log({ greeting: 'hi' });

log(function () {
  console.log('hi');
});

//log will now show a a a
