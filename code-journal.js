/* Variables - containers that store values */

var name // a declared variable, but not initialized and it's in the global scope (BAD)

let foo // a declared variable that can be changed

const bar // a declared variable that cannot be changed - short for 'constant'

const ANSWER = 42 // const is declared and initialized with the value 42

// Strings

let string1 = 'Hello World!' // read '=' as 'is assigned the value of ...'

let string2 = "Hello Utah!"

let string3 = new String('Hello World!')

// Number

let myNum = 2083972347

let myNum2 = 75.43

'1' == 1 // this statement is true because of type coercion and loose equality checking
'1' === 1 // false because this is strict equality checking

// Boolean

let myBool = true

// Array

let myArray = [] // this is an empty array
//              0     1       2       3      4
let myArray2 = [42, 'Bob', myBool, ANSWER, true]

letsecondElement = myArray2[1]

myArray2.push('Shelby') // added an element to the end of myArray2

myArray2.unshift('Hello World!')

let mylongString = '24782hfhghdg894htdgkjadfkdjbgih84983hgrgjkbfdkjfdk' // just an array of characters

mylongString.length

// Object

let minObject = {}

const myCar = {
    make: "Chevrolet",
    color: "Red",
    year: "1965",
    vin: "28974639eijkldjshs40"
};

myCar.numDoors = 2;

const anotherObject = {
    wordz: ("too", "bar", "baz"),
    car: {
        make: "McLaren",
        model: "675Lt"
    },
    awesomeness: true
};

// Functions

function myFunction() {
    return "My greeting to you...";
}

function sumTwoThings(one, two) {
    // watch out for data type issues here
    return one + two; // if numbers will add them If strings will concatenate.
}

// Arrow Functions

// a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every and some are also HOFs

const theFunction = () => { //multiple lines use curly braces and 'return' keyword
return 'I am awesome'
}