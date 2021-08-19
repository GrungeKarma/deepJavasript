function b() {
  var myVar;
  //expect output to be 'undefined'
  console.log(myVar);
}

function a() {
  var myVar = 2;
  //expect output to be 2
  console.log(myVar);
  b();
}

var myVar = 1;
//expect output to be 1
console.log(myVar);
a();
//expect output to be 1
console.log(myVar);

//output will be "1 2 undefined 1"

//every function creates a new execution context
//once executed the execution context is popped off the stack
