let newVariable = "abc";

newVariable = "bca";

// console.log(newVariable);

const newConst = "abc"; // So if we use const, the variable can not be re-assigned

// newConst = "bca" -> This will cause an error

const MAX_NUMBER = 9999; // If we have values that we know won't change, we use this to make code clearer

let randomValue = 5;

if (randomValue < MAX_NUMBER) {
  // console.log("Smaller number");
}

// Base sytnax, with function
function showLog(param) {
  // Here we excecute our code
  console.log("This is a log");

  return "A value that is returned";
}

// let whatTheFunctionReturns = showLog();

//console.log(whatTheFunctionReturns);

// No function anymore
let showLogSecond = (param) => {
  // console.log("This is a log again !");
};

// Short syntax, we don't need a return
let shortArrowFunction = () => MAX_NUMBER;

const array = [1, 2, 3];

// array.forEach((item) => console.log(item));

let shortArrowFunctionAnswer = shortArrowFunction();

// console.log(shortArrowFunctionAnswer);

showLogSecond();

// If the code takes longer than 1 line OR I do not return the value directly, use { return...}
const calculateMax = (a, b) => {
  if (a > b) {
    return a;
  }

  return b;
};

// If there is only one param, we can write without (,)
const arrowFunctionOneParam = (onlyParam) => onlyParam;

//console.log(calculateMax(6, 3));

const STATIC_VALUE = 4;

// let newNewArrowFunction =
//   STATIC_VALUE > 3
//     ? () => console.log("Bigger than 3")
//     : () => console.log("Smaller than 3");

// newNewArrowFunction();

// If we use .this in an arrowFunction, it takes the values from the entire context
const NEW_PEOPLE = {
  names: ["Theo", "Alice", "John"],
  ageRange: "18-22",
  currentYear: "2022",
  showSomeData() {
    let names = ["otherTheo", "otherAlice"];

    //console.log(this.names);
  }
};

// Clasic syntax of function have arguments variable
function showArguments() {
  console.log(arguments); // Accesses the incoming arguments
}

// let incomingArguments = showArguments(1, 2, 3);

function calculateMinimum(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) {
    return firstNumber;
  }

  return secondNumber;
}

// const arrowFunctionOneParam = (onlyParam) => onlyParam;

//   STATIC_VALUE > 3
//     ? () => console.log("Bigger than 3")
//     : () => console.log("Smaller than 3");

const calcMinArrowFunction = (firstNumber, secondNumber) =>
  firstNumber < secondNumber ? firstNumber : secondNumber;

// Destructuring assignment

const destructArray = [1, 2];

// console.log(destructArray[0]);

// const [firstValue, secondValue] = destructArray;

// console.log(firstValue, secondValue);

const NEW_STRING_ARRAY = "John-Smith";

// console.log(NEW_STRING_ARRAY.split("-"));

const [firstValue, secondValue] = NEW_STRING_ARRAY.split("-");

// console.log(firstValue, secondValue);

let guest = "Pete";
let admin = "John";

const [myGuest, myAdmin = "Default"] = [admin];

// console.log(myGuest);
// console.log(myAdmin);

const AN_OBJECT = {
  name: "John",
  age: "59"
};

// let age = AN_OBJECT.age;

const { name } = AN_OBJECT;

let { age } = AN_OBJECT;

// console.log({ name, age });

// REST SYNTAX

const showArray = (...args) =>
  // console.log(args.forEach((argument) => console.log("argument" + argument)));

  showArray(1, 2, 3);

// SPRREAD SYNTAX

const arraySum = (a, b, c, d) => a + b + c;

const myArray = [1, 2, 3];

// console.log(arraySum(...myArray));

const cloneArray = [...myArray, ...myArray];

// console.log(cloneArray);

const finalObject = { a: 1, b: 2 };

let clonedObject = { ...finalObject };

// console.log({ finalObject });

const cloningObject = (b) => b - 1;

// We use ` ` when we want to integrate JS code in string
console.log(`${clonedObject.a - 1} and ${cloningObject(clonedObject.b)}`);
