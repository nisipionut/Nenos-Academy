let ourObject = {
  funcExample: function () {
    console.log('I am here');
  },
  stringType: 'example',
  numberType: 2,
};

ourObject.funcExample();
console.log(ourObject.numberType);

let myNumber = NaN;

console.log(isNaN(myNumber));

let myOtherNumber = 'p123';

console.log(parseInt(myOtherNumber));

let someString = 'this is a longer string'; // Positioning in JS starts from 0 !

console.log(someString[1]);
console.log(someString.charAt(0)); // A function primitive

for (let char of someString) {
  // We can use this to iterate through a string
  // console.log(char)
}

console.log(someString.includes('0')); // True or false if that substring exists in our string

let newArray = ['oneElement', '2ndElement'];

newArray[2] = '3rd element';

console.log(newArray[-1]); // [] syntax
// console.log(newArray.at(-1)); // AT syntax

let biggerArray = [
  {
    name: 'John',
    age: 19,
  },
  'String',
  3,
];

let newNewArray = [1, 2, 3]; // The STACK principle

newNewArray.pop(); // Remove last element

// console.log(newNewArray);

newNewArray.push(4);

// console.log(newNewArray); // Add to the last position a new element

for (let newIndex of newNewArray) {
  // We can iterate through an array
  // console.log(newIndex);
}

newNewArray.forEach(function (item) {
  // Same as for-of, but we can apply a longer block of code
  //   console.log(item);
});

// console.log(newNewArray);

let people = [
  {
    name: 'Alex',
    age: 20,
  },
  {
    name: 'Not Alex',
    age: 20,
  },
  {
    name: 'John',
    age: 22,
  },
  {
    name: 'NotJohn',
    age: 20,
  },
];

let foundPerson = people.find((item) => item.age === 20); // Finds ONE element that accepts the condition

console.log(foundPerson);

let youngFilter = people.filter((iteredItem) => iteredItem.age === 20); // Filters ALL THE ELEMENTS that accept the condition

console.log(youngFilter);

let newPeople = people.map((item) => item.age + 1); // CREATES a new array based on previous array with an applied function

console.log(newPeople);

let newPeople2 = people.map((newItem) => newItem.name);

console.log(newPeople2);
