// var abstraction = function (a) {
//     return a + 1;
// };

// // We can then plug `a` in:
// console.log(abstraction(2));
// // => (a => a + 1)(2)
// // { replace `a` by the provided value }
// // => (2 => 2 + 1)
// // { reduce the expression }
// // => 2 + 1
// // { reduce the expression }
// // => 3
// function createPromise() {
//     return {
//         // A promise starts containing no value,
//         value: null,
//         // with a "pending" state, so it can be fulfilled later,
//         state: "pending",
//         // and it has no dependencies yet.
//         dependencies: [],
//     };
// }

// function fulfil(promise, value) {
//     if (promise.state !== "pending") {
//         throw new Error("Trying to fulfil a non-pending promise!");
//     } else {
//         promise.state = "fulfilled";
//         promise.value = value;
//         var dependencies = promise.dependencies;
//         promise.dependencies = [];
//         dependencies.forEach(function (pattern) {
//             pattern.fulfilled(value);
//         });
//     }
// }

// // Note that we now take two expressions, rather than one.
// function depend(promise, onSuccess, onFailure) {
//     var result = createPromise();

//     if (promise.state === "pending") {
//         // Dependencies now gets an object containing
//         // what to do in case the promise succeeds, and
//         // what to do in case the promise fails. The functions
//         // are roughly the same as the previous ones.
//         promise.dependencies.push({
//             fulfilled: function (value) {
//                 depend(
//                     onSuccess(value),
//                     function (newValue) {
//                         fulfil(result, newValue);
//                         return createPromise();
//                     },
//                     // We have to care about errors that
//                     // happen when applying the expression too
//                     function (newError) {
//                         reject(result, newError);
//                         return createPromise();
//                     }
//                 );
//             },

//             // The rejected branch does the same as the
//             // fulfilled branch, but uses the onFailure
//             // expression.
//             rejected: function (error) {
//                 depend(
//                     onFailure(error),
//                     function (newValue) {
//                         fulfil(result, newValue);
//                         return createPromise();
//                     },
//                     function (newError) {
//                         reject(result, newError);
//                         return createPromise();
//                     }
//                 );
//             },
//         });
//     } else {
//         // if the promise has been fulfilled, we run onSuccess
//         if (promise.state === "fulfilled") {
//             depend(
//                 onSuccess(promise.value),
//                 function (newValue) {
//                     fulfil(result, newValue);
//                     return createPromise();
//                 },
//                 function (newError) {
//                     reject(result, newError);
//                     return createPromise();
//                 }
//             );
//         } else if (promise.state === "rejected") {
//             depend(
//                 onFailure(promise.value),
//                 function (newValue) {
//                     fulfil(result, newValue);
//                     return createPromise();
//                 },
//                 function (newError) {
//                     reject(result, newError);
//                     return createPromise();
//                 }
//             );
//         }
//     }

//     return result;
// }

// function reject(promise, error) {
//     if (promise.state !== "pending") {
//         throw new Error("Trying to reject a non-pending promise!");
//     } else {
//         promise.state = "rejected";
//         promise.value = error;
//         var dependencies = promise.dependencies;
//         promise.dependencies = [];
//         dependencies.forEach(function (pattern) {
//             pattern.rejected(error);
//         });
//     }
// }

// // A computation that may fail
// var div = function (a, b) {
//     var result = createPromise();

//     if (b === 0) {
//         reject(result, new Error("Division By 0"));
//     } else {
//         fulfil(result, a / b);
//     }

//     return result;
// };

// var printFailure = function (error) {
//     console.error(error);
// };

// var a = 1,
//     b = 2,
//     c = 0,
//     d = 3;
// var xPromise = div(a, b);
// var yPromise = depend(
//     xPromise,
//     function (x) {
//         return div(x, c);
//     },
//     printFailure
// );
// var zPromise = depend(
//     yPromise,
//     function (y) {
//         return div(y, d);
//     },
//     printFailure
// );

// function chain(promise, expression) {
//     return depend(promise, expression, function (error) {
//         // We propagate the state and
//         // value of the error by just
//         // creating an equivalent promise
//         var result = createPromise();
//         reject(result, error);
//         return result;
//     });
// }

// function recover(promise, expression) {
//     return depend(
//         promise,
//         function (value) {
//             // We propagate successful values
//             // by just creating an equivalent
//             // promise.
//             var result = createPromise();
//             fulfil(result, value);
//             return result;
//         },
//         expression
//     );
// }

// var a = 1,
//     b = 2,
//     c = 0,
//     d = 3;
// var xPromise = div(a, b);
// var yPromise = chain(xPromise, function (x) {
//     return div(x, c);
// });
// var zPromise = chain(yPromise, function (y) {
//     return div(y, d);
// });
// var resultPromise = recover(zPromise, printFailure);

var sideP = Promise.resolve(10);
var squareAreaP = sideP.then((side) => side * side);
squareAreaP.then((area) => console.log(area));

// Which is more akin to the synchronous version:
var side = 10;
var squareArea = side * side;
console.log(squareArea);

var radiusP = Promise.resolve(10);
var piP = Promise.resolve(Math.PI);
var circleAreaP = Promise.all([radiusP, piP]).then(
    ([radius, pi]) => radius * radius * pi
);
circleAreaP.then((circleArea) => console.log(circleArea));

var div = function (a, b) {
    return new Promise((fulfil, reject) => {
        if (b === 0) reject(new Error("Division by 0"));
        else fulfil(a / b);
    });
};

var printFailure = function(error) {
    console.error(error);
  };

var a = 1,
    b = 2,
    c = 0,
    d = 3;
var xP = div(a, b);
var yP = xP.then((x) => div(x, c));
var zP = yP.then((y) => div(y, d));
var resultP = zP.catch(printFailure);
