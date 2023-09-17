var firstName = "Peter",
    lastName = "Ally";

function showFullName() {
    // "this" inside this function will have the value of the window object
    // because the showFullName () function is defined in the global scope, just like the firstName and lastName
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: function () {
        // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.
        console.log(this.firstName + " " + this.lastName);
    },
};

showFullName(); // Peter Ally

// window is the object that all global variables and functions are defined on, hence:
window.showFullName(); // Peter Ally

// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:
person.showFullName(); // Penelope Barrymore

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: function () {
        // The "context"
        console.log(this.firstName + " " + this.lastName);
    },
};

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.showFullName(); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
    firstName: "Rohit",
    lastName: "Khan",
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.showFullName.apply(anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method

// We have two objects. One of them has a method called avg () that the other doesn't have
// So we will borrow the (avg()) method
var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players: [
        {name: "Tommy", playerID: 987, age: 23},
        {name: "Pau", playerID: 87, age: 33},
    ],
};

var appController = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function () {
        var sumOfScores = this.scores.reduce(function (
            prev,
            cur,
            index,
            array
        ) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    },
};

//If we run the code below,
// the gameController.avgScore property will be set to the average score from the appController object "scores" array

// Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null
gameController.avgScore = appController.avg();

// Note that we are using the apply () method, so the 2nd argument has to be an array—the arguments to pass to the appController.avg () method.
appController.avg.apply(gameController, gameController.scores);

// The avgScore property was successfully set on the gameController object, even though we borrowed the avg () method from the appController object
console.log(gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log(appController.avgScore); // null
