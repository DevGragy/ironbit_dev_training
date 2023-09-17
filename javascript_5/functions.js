function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

//   SCOPE
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `${name} scored ${num1 + num2}`;
    }

    return add();
}

console.log(getScore()); // "Chamakh scored 5"

// CLOSURES
// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
        // The inner function has access to the "name" variable of the outer function
        return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"

//   ARGUMENTS
function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

// FUNCTION PARAMS
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}

console.log(multiply(5)); // 5

//   ARROW FUNCTIONS
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

