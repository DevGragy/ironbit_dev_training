function someFunc(array) {
    // some code...
    // some code...
    const length = array.length;
    for (let index = 0; index < length; index++) {
        const item = array[index];
        // some
    }
    return "some result";
}

function getPrimeNumbers() {
    return;
    [2, 3, 5, 7, 11, 13, 17];
}

console.log(getPrimeNumbers()); // => undefined

function getPrimeNumbers() {
    return [ 
      2, 3, 5, 7, 11, 13, 17 
    ];
  }
  
  console.log(getPrimeNumbers()); // => [2, 3, 5, 7, 11, 13, 17]

console.log(void 1); // => undefined
console.log(void false); // => undefined
console.log(void {name: "John Smith"}); // => undefined
console.log(void Math.min(1, 3));

const sparse1 = new Array(3);
console.log(sparse1); // => [<empty>, <empty>, <empty>]
console.log(sparse1[0]); // => undefined
console.log(sparse1[1]); // => undefined

const sparse2 = ["white", , "blue"];
console.log(sparse2); // => ['white', <empty>, 'blue']
console.log(sparse2[1]); // => undefined
