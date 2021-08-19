//logs true
console.log(1 < 2 < 3);

//also logs true
console.log(3 < 2 < 1);
// firs thing that is processed is 3 > 2 and that logs false
//it now looks like
//console.log(false < 1);
//it will now coerce the false value into an integer and it becomes 0
//it now looks like
//console.log(0 < 1);

var a = 0;
var b = false;

//logs they are equal
// if (a == b) {
//   console.log('They are equal!')
// } else {
//   console.log('Nope, not equal.')
// }

//logs Nope, not equal
if (a === b) {
  console.log('They are equal!')
} else {
  console.log('Nope, not equal.')
}

//triple equals does not attempt to coerce the values
//double equals does
//in most cases use === to avoid bugs, unless you want to invoke coercion, then use ==
//learn more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
