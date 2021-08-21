// var person = { firstname: 'Anthony', lastname: 'Lopez' };
// console.log(person);
//the code above is the same as
// person = newObject();
// person.firstname = 'Anthony';
// person.lastname = 'Lopez';

var Anthony = { //treated as one line of code
  firstname: 'Anthony',
  lastname: 'Lopez',
  address: {
    street: '123 Main St.',
    state: 'NH',
    country: 'USA'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

//console logs entire object
console.log(Anthony);
//logs Hi Anthony
greet(Anthony);

//you can input objects directly into the function
//logs Hi Gary
greet({ firstname: 'Gary', lastname: 'Mitz' });




