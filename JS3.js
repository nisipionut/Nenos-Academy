let a = '7';

switch (
  a // The value we check
) {
  case 5: // Condition / case
    console.log('You are here');
    break; // Add break after each case

  // For the same value of the case
  case 6:
  case '7': // Has to match type as well
    console.log('I am 7');
    break;

  default:
    console.log('I am not in the cases');
    break;
}

let globalVariable = '0';

function showNumber(number) {
  console.log(number);
  let copyNumber = number;
  console.log(copyNumber); // A variable declared in the function only exists inside its block
}

showNumber();
// console.log(copyNumber)

function defaultParam(incomingString = 'string value') {
  // If we added a default value
  console.log(incomingString);
}

defaultParam(); // We call the function without a parameter
defaultParam('sent string');

let copyFunction = defaultParam; // We can store a function in a variable => this is called a function expression

copyFunction();

let simpleObject = {
  stringType: 'string',
  numberType: 5,
  booleanType: false,
  'another type': 'stringtypething',
}; // Literal syntax of an object

console.log(simpleObject.numberType); // Access key of an object

simpleObject.numberType = 7; // We change values as we do it with variables

delete simpleObject.stringType; // Delete key

console.log(simpleObject['another type']); // Square brackets can be used to access more complicated key names

let keyName = 'numberType';

console.log(simpleObject[keyName]); // We can also use them to access foreign/dynamic keys

let newObject = {
  [simpleObject[keyName] + 'builtKey']: 'Here we built a dynamic key',
};

console.log(newObject); // We access the new dynamic formed key

let thirdValue = 'aString';

let sameKeysObject = {
  newValue: 20,
  anotherValue: 30,
  thirdValue, // We also need a value for shorthand properties
  return: 2,
};

console.log(sameKeysObject.return);

console.log(sameKeysObject['noValue']); // JS does not stop if a value is undefined

console.log('I have passed the undefined problem');

console.log('return' in sameKeysObject); // We can use <<in>> to check if a property exists

console.log('let' in sameKeysObject);

for (let key in sameKeysObject) {
  console.log(key); // We can use this for to access every PROPERTY in an object
}
