

var arr = [1, 2, 3];

console.log(arr[0]);

//can put what ever you like in an array because javascript is dynamically typed.

var arr1 = [
  1,
  false,
  {
    name: "Cretch",
    address: '123 Main St.'
  },
  function (name) {
    var greeting = 'hello'
    console.log(name + ' ' + greeting)
  }
]

console.log(arr1);

//calls function in arr1 index 3 on the object at arr1 index 2
arr1[3](arr1[2].name);
