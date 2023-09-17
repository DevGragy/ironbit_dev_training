// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";

function myStrictFunction() {
    // Function-level strict mode syntax
    "use strict";
    function nested() {
        return "And so am I!";
    }
    return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
    return "I'm not strict.";
}

class C1 {
    // All code here is evaluated in strict mode
    test() {
        delete Object.prototype;
    }
}
new C1().test(); // TypeError, because test() is in strict mode

const C2 = class {
    // All code here is evaluated in strict mode
};

// Code here may not be in strict mode
delete Object.prototype; // Will not throw error

("use strict");
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;

("use strict");

// Assignment to a non-writable global
undefined = 5; // TypeError
Infinity = 5; // TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", {value: 42, writable: false});
obj1.x = 9; // TypeError

// Assignment to a getter-only property
const obj2 = {
    get x() {
        return 17;
    },
};
obj2.x = 5; // TypeError

// Assignment to a new property on a non-extensible object
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError

function restricted() {
    "use strict";
    restricted.caller; // throws a TypeError
    restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
    return restricted();
}
privilegedInvoker();
