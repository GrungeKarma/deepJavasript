var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

var john = {
  firstName: 'John',
  lastName: "Doe"
}

//don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {
  //allows us to keep prototypal inheritance out of the log
  if (john.hasOwnProperty(prop)) {
    //logs firstName: John lastName: Doe
    console.log(prop + ': ' + john[prop]);
  }
}

//using underscore

var jane = {
  address: '111 Main St.',
  getFormalFullName: function () {
    return this.lastName + ', ' + this.firstName;
  }
}

var jim = {
  getFirstName: function () {
    return firstName;
  }
}


_.extend(john, jane, jim);

//john now contains all the properties and methods of the other objects
console.log(john);
