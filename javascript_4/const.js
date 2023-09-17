const MY_FAV = 7;

if (MY_FAV === 7) {
  // This is fine because it's in a new block scope
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // var declarations are not scoped to blocks so this throws an error
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7


const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
