function makeGreeting(language) {

  return function (firstName, lastName) {
    if (language === 'en') {
      console.log('Hello ' + firstName + ' ' + lastName);
    }
    if (language === 'es') {
      console.log('Hola ' + firstName + ' ' + lastName);
    }
  }
}
//each creates a new execution context
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

//each creates a new execution context
greetEnglish('John', 'Doe');
greetSpanish('Juan', 'Lopez');

//this is a factory function taking advantage of closures

//with this logic you can create functions in Js with other functions and it is possible because in JS, functions are objects
