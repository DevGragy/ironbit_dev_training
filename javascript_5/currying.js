var greetCurried = function (greeting) {
    return function (name) {
        console.log(greeting + ", " + name);
    };
};

var greetHello = greetCurried("Hello");

greetHello("Heidi");
greetHello("Eddie");
greetCurried("Hi there")("Howard");

var greetDeeplyCurried = function (greeting) {
    return function (separator) {
        return function (emphasis) {
            return function (name) {
                console.log(greeting + separator + name + emphasis);
            };
        };
    };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi");

var sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi");

var askHello = sayHello("?");
askHello("Heidi");

var curryIt = function (uncurried) {
    var parameters = Array.prototype.slice.call(arguments, 1);
    return function () {
        return uncurried.apply(
            this,
            parameters.concat(Array.prototype.slice.call(arguments, 0))
        );
    };
};

var greeter = function (greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi");

var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe");
