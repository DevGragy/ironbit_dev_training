// This is a self-executing function. It's a function that executes (or
// invokes) itself, recursively:

function foo() {
    foo();
}

// This is a self-executing anonymous function. Because it has no
// identifier, it must use the  the `arguments.callee` property (which
// specifies the currently executing function) to execute itself.

var foo = function () {
    arguments.callee();
};

// This *might* be a self-executing anonymous function, but only while the
// `foo` identifier actually references it. If you were to change `foo` to
// something else, you'd have a "used-to-self-execute" anonymous function.

var foo = function () {
    foo();
};

// Some people call this a "self-executing anonymous function" even though
// it's not self-executing, because it doesn't invoke itself. It is
// immediately invoked, however.

(function () {
    /* code */
})();

// Adding an identifier to a function expression (thus creating a named
// function expression) can be extremely helpful when debugging. Once named,
// however, the function is no longer anonymous.

(function foo() {
    /* code */
})();

// IIFEs can also be self-executing, although this is, perhaps, not the most
// useful pattern.

(function () {
    arguments.callee();
})();
(function foo() {
    foo();
})();

// One last thing to note: this will cause an error in BlackBerry 5, because
// inside a named function expression, that name is undefined. Awesome, huh?

(function foo() {
    foo();
})();

// Create an anonymous function expression that gets invoked immediately,
// and assign its *return value* to a variable. This approach "cuts out the
// middleman" of the named `makeWhatever` function reference.
//
// As explained in the above "important note," even though parens are not
// required around this function expression, they should still be used as a
// matter of convention to help clarify that the variable is being set to
// the function's *result* and not the function itself.

var counter = (function () {
    var i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        },
    };
})();

// `counter` is an object with properties, which in this case happen to be
// methods.

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5

counter.i; // undefined (`i` is not a property of the returned object)
i; // ReferenceError: i is not defined (it only exists inside the closure)
