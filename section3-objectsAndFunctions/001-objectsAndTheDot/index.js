var person = new Object();

//setting first and last name using bracket notation attaching properties to objects
person['firstname'] = 'Anthony';
person['lastname'] = 'Lopez';

var firstNameProperty = 'firstname';

// logs {firstname: "Anthony", lastname: "Lopez"}
console.log(person);

//logs Anthony
console.log(person[firstNameProperty]);

//if you want to call a property with bracket operator you have to add quotes
console.log(person['firstname']);

//above is the bracket method of accessing a property

//accessing the person['firstNameProperty'] & person['lastNameProperty'] using the dot
//no quotes needed
console.log(person.firstname);
console.log(person.lastname);

//dot operator is more common than the bracket operator

person.address = new Object();
person.address.street = '111 Main St.';
person.address.state = 'NH';
person.address.city = 'Quickville';

console.log(person.address.city);
console.log(person.address.state);

//same as console.log(person['address']['street']);
console.log(person.address.street);

//fyi: the code here is not a good way to create an object and was written this way for demonstration purposes

