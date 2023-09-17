const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid

const myDate1 = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

const myDate2 = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
    console.log("something else!");
};

myDate.getYear(); // 'something else!'

const personPrototype1 = {
    greet() {
        console.log("hello!");
    },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

const personPrototype2 = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
