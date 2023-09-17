function varTest() {
    var x = 1;
    {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
}

function letTest() {
    let x = 1;
    {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}

var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined

var a = 1;
var b = 2;

{
    var a = 11; // the scope is global
    let b = 22; // the scope is inside the block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
