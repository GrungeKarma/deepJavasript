function greet(name) {
  name = name || 'you'
  console.log('Hello ' + name);
}

//logs Hello Anthony
greet('Anthony')

//logs Hello undefined
greet()

// or operator will return the first value that returns true
