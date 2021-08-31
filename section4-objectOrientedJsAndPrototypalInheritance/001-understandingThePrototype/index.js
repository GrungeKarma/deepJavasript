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

//logs John Doe
console.log(john.getFullName());

//logs John
console.log(john.firstName);

var jane = {
  firstName: 'Jane'
}

jane.__proto__ = person;

//log Jane Default
console.log(jane.getFullName());

