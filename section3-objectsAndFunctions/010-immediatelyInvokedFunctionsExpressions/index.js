//this is a function statement
function greet(name) {
  console.log('hello' + name)
}
//function statements have to be invoked
greet(' John')

//using a function expression
var greetFunc = function (name) {
  console.log('hello' + ' ' + name)
}
//use var to invoke anonymous function
greetFunc();

// using an Immediately Invoked Function Expression (IIFE)
//add parens to the end to immediately invoke
var greeting = function (name) {
  console.log('hello' + name)
}(' John');

//this is not a function expression, it is a function statement
//function (name) {
//  console.log('hello' + name)
//} (' John');

//to turn it into a function expression you must wrap it in parens
(function (name) {
  console.log('hello' + name)
}(' John'));


var money = 10;
(function (money) {
  console.log(`you have $${money} monies!`)
}(money));

//logs 57 because age.js sets the global var
console.log(age);


(function (global, name, age) {
  //pass in global object and directly change it in the function because they create their own context
  global.age = age;
  console.log('You are ' + age + ' old.')
}(window, 'Jose', 17));

//logs 17
console.log(age);

window.age = 10;

console.log(Object.keys(window));
