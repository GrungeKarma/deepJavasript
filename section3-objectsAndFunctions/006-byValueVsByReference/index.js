//by value (primitives)

//creates a pointer to a location in memory
var a = 3;
var b;
//creates a copy of var a to a new location in memory
b = a;
// logs 3
console.log(b);

// sets a to 2 without changing var b
a = 2;

//will log 2;
console.log(a);
// will log 3
console.log(b);

//by reference (all object (including functions))
var c = { greeting: 'hi' }
var d;

// logs hi
console.log(c);

//sets a pointer from d to the same spot im memory to c
d = c;
c.greeting = 'hello'; //mutate

//logs hello because d points to the same spot in memory and greeting in the object was changed to hello
console.log(c);
//logs hello
console.log(d);

//by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Ohio';
}

changeGreeting(d);

//both log Ohio because function params are applied by reference
console.log(c);
console.log(d);

//equals operator sets up new memory space (assigns a new address in memory)
c = { greeting: 'Nihao' }

//will log Nihao because a new space in memory was set up for it
console.log(c);
console.log(d);



