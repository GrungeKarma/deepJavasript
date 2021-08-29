function greet(firstname, lastname, language) {
  //adding the or statement set a default value for language
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing Parameters!')
    console.log('-------------------');
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('-------------------');
}

// first call the values are undefined Js does not care but other languages would throw an error
//the function object sets up the memory variables and sets them to undefined;
greet();
//logs 'John' undefined undefined
greet('John');
//logs 'John' 'Doe' undefined
greet('John', 'Doe');
//logs 'John' 'Doe' 'en'
greet('John', 'Doe', 'en');
//as you add values from left to right they replace the undefined values


