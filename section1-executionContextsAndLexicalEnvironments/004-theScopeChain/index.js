// function b() {
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

//every execution environment has a reference to its outer environment
//the act of searching the chain of references to the outer environment is called the scope chain
// console.logs '1' because myVar = 1 in the outer environment

function a() {
  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();

//console.logs '2' because myVar = 2 in the outer environment which is function a
// if myVar was not declared in function a it would go up the scope chain to the global context and myVar will equal 1
