console.log("Hello.");

setTimeout(function () {
    console.log("Goodbye!");
}, 0);
console.log("Hello again!");

// AJAX REQUEST
// function getData() {
//     var data;
//     $.get("example.php", function (response) {
//         data = response;
//     });
//     return data;
// }

// var data = getData();
// console.log("The data is: " + data);


// Function optimized with promises
// function getData(options) {
//     return new Promise(function (resolve, reject) {
//         $.get(
//             "example.php",
//             options,
//             function (response) {
//                 resolve(JSON.parse(response)); 
//             },
//             function () {
//                 reject(new Error("AJAX request failed!")); 
//             }
//         );
//     });
// }

// getData({name: "John"}).then(
//     function (data) {
//         console.log(data);
//     },
//     function (err) {
//         console.log("Error! " + err);
//     }
// );
