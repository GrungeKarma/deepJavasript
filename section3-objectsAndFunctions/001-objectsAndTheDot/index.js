//Javascript uses standard mathematical rules to decide which operators are processed first
var a = 3 + 4 * 8;
//it first processes 4 * 8 which is 32
//it then adds 3 + 32 bringing the total to 35
console.log(a);

//in cases where the operators have the same level of associativity(either left to right, right to left, or none)
var b = 9 / 3 * 8;
//it first processes 9 / 3  which is 3
//then it multiplies 3 * 8 bringing the total to 24
console.log(b);

//grouping '()' parens take precedence over all others
var c = (4 + 5) * 10;
//it first processes 4 + 5 which is 9
//then it multiplies 9 * 10 bringing the total to 90
console.log(c);

// for more information visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
