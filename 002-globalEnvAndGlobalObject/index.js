
//most programing languages you would expect this placement to return an error

b();

//returns undefined
console.log(a);


// if you remove this var console.log(a) will return an error
//known as hoisting
//hoisting sets up memory space for variables and functions before your code is executed
//when the interpreter sets up memory space for a variable dose not know its value until it executed the code instead it uses a placeholder called undefined
var a = "hello world";

//functions are placed in memory space as a whole
function b () {
	console.log('Called b!');
}

//display "Called b!" & "hello world"
//calling afterwards is preferred
//b();
//console.log(a);


//phase one is setting up memory space
