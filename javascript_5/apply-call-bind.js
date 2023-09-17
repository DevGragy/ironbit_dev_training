{/* <pre><code data-language="javascript"> */}
// Here we have a cars object that does not have a method to print its data to the console
var cars = {
    data:[
        {name:"Honda Accord", age:14},
        {name:"Tesla Model S", age:2}
    ]

}

// We can borrow the showData () method from the user object we defined in the last example.
// Here we bind the user.showData method to the cars object we just created.
cars.showData = user.showData.bind (cars);
cars.showData (); // Honda Accord 14

// </code></pre>

// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 94545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName) {
        // this refers to the fullName property in this object
        this.fullName = firstName + " " + lastName;
    },
};
function getUserInput(firstName, lastName, callback, callbackObj) {
    // The use of the Apply method below will set the "this" value to callbackObj
    callback.apply(callbackObj, [firstName, lastName]);
}

// The clientData object will be used by the Apply method to set the "this" value
getUserInput("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama


var allNumbers = [23, 11, 34, 56];
// Using the apply () method, we can pass the array of numbers:
console.log(Math.max.apply(null, allNumbers)); // 56

var students = [
    "Peter Alexander",
    "Michael Woodruff",
    "Judy Archer",
    "Malcolm Khan",
];

// No specific parameters defined, because ANY number of parameters are accepted
function welcomeStudents() {
    var args = Array.prototype.slice.call(arguments);

    var lastItem = args.pop();
    console.log("Welcome " + args.join(", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply(null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.
