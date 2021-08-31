function greet(whatToSay) {

  return function (name) {
    console.log(whatToSay + ' ' + name)
  }
}

//invoke a function that returns a function
//the return function can be invoked as well
//greet('hi')('Anthony');

//sayHi is now a function that
var sayHi = greet('Hi');
sayHi('Anthony');
//the execution context closes in all variables it is called a closure
//Js creates closures, we just take advantage of them

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      function () {
        //not running until invoked
        console.log(i);
      }
    )
  }
  //in memory i === 3 and there are three functions
  return arr;
}

var fs = buildFunctions();

//all log 3
fs[0]();
fs[1]();
fs[2]();

//the value of i is what it is at the time you execute a function

//called free variables, or a variable that is outside of a function but you still have access to

//let fixes the problem it is scoped inside the function and creates multiple spots in memory


//get around var problem
function buildFunctions1() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        }
      }(i))
    )
  }

  //in memory i === 3 and there are three functions
  return arr;
}

var fs1 = buildFunctions1();
fs1[0]();
fs1[1]();
fs1[2]();
