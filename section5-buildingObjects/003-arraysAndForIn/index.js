
//remember that arrays are objects
var arr = ['Boggle', 'Uno', 'Yahtzee'];
Array.prototype.myCustomFeature = 'cool!';

//logs all names and my custom feature because an array is just a series of name value pairs
//for this reason do not use for in loop for arrays use for loop
for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}

//does not log the prototype
for (let index = 0; index < arr.length; index++) {
  console.log(index + ': ' + arr[index]);
}

console.log(arr);


