var objectLiteral = {
  firstname: 'Tom',
  isAProgrammer: true
}

//is valid and will log the object
console.log(objectLiteral);

//JSON is similar to the object literal but not the same

let json = {
  'firstname': 'Gorn',
  'isAProgramer': true
};
//JSON is a subset of the object literal syntax
//anything that is valid JSON is valid object Literal syntax

//converts object literals to Java Script Object Notation
console.log(JSON.stringify(objectLiteral));

//converts JSON string into a javaScript Object
var jsonValue = JSON.parse('{"firstname": "Gorn", "isAProgramer": true }');

console.log(jsonValue);
