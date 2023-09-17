// Lexical scoping
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// Closure
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// Practical closures

function makeSizer(size) {
    return function () {
        document.body.style.fontSize = `${size}px`;
    };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

// Emulating private methods with closures

const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

// Closure scope chain
// global scope
const e = 10;
function sum(a) {
    return function sum2(b) {
        return function sum3(c) {
            // outer functions scope
            return function sum4(d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20

// Creating closures in loops: A common mistake
// One solution in this case is to use more closures: in particular, to use a function factory as described earlier
function showHelp(help) {
    document.getElementById("help").textContent = help;
}

function makeHelpCallback(help) {
    return function () {
        showHelp(help);
    };
}

function setupHelp() {
    var helpText = [
        {id: "email", help: "Your email address"},
        {id: "name", help: "Your full name"},
        {id: "age", help: "Your age (you must be over 16)"},
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
}

setupHelp();

// Performance considerations
function MyObjectBefore(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function () {
        return this.name;
    };

    this.getMessage = function () {
        return this.message;
    };
}

function MyObjectAfter(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
MyObject.prototype.getName = function () {
    return this.name;
};
MyObject.prototype.getMessage = function () {
    return this.message;
};
